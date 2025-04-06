import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MarkAttendance = () => {
    const [students, setStudents] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [attendanceDate, setAttendanceDate] = useState('');
    const [attendance, setAttendance] = useState({});
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        // Fetch students from API
        fetch('http://localhost:5000/api/applications/students')
            .then(response => response.json())
            .then(data => {
                setStudents(data);

                // Get all unique time slots from students data
                if (data && data.length > 0) {
                    const slots = [...new Set(data.map(student => student.time_slot))];
                    setTimeSlots(slots);
                }
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    // Filter students based on selected time slot
    const filteredStudents = selectedTimeSlot
        ? students.filter(student => student.time_slot === selectedTimeSlot)
        : students;

    const handleAttendanceToggle = (name) => {
        setAttendance(prev => ({
            ...prev,
            [name]: prev[name] === 'Present' ? 'Absent' : 'Present'
        }));
    };

    const handleSaveAttendance = async () => {
        if (!attendanceDate || !selectedTimeSlot) {
            alert('Please select both date and time slot');
            return;
        }

        // Prepare attendance data for sending to the server
        const attendanceData = Object.keys(attendance).map(studentName => ({
            student_name: studentName,
            attendance_status: attendance[studentName],
            attendance_date: attendanceDate,
            time_slot: selectedTimeSlot
        }));

        try {
            // Send attendance data to server
            const response = await fetch('http://localhost:5000/api/applications/attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ attendance, attendanceDate, selectedTimeSlot })
            });

            if (response.ok) {
                alert('Attendance saved successfully!');
            } else {
                alert('Error saving attendance');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving attendance');
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '15px 0' }}>
                <div style={{ width: '90%', margin: '0 auto', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '26px', fontWeight: 'bold' }}>Coach Dashboard</div>
                    <nav>
                        <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                            <li style={{ marginLeft: '20px' }}><Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
                            <li style={{ marginLeft: '20px' }}><Link to="/addstudents" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Add Students</Link></li>
                            <li style={{ marginLeft: '20px' }}><Link to="/viewstudents" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>View Students</Link></li>
                            <li style={{ marginLeft: '20px' }}><Link to="/markattendance" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mark Attendance</Link></li>
                            <li style={{ marginLeft: '20px' }}><Link to="/markfees" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mark Fees</Link></li>
                            <li style={{ marginLeft: '20px' }}><Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <h2>Mark Attendance</h2>
            <div style={{ marginBottom: '10px' }}>
                <label>Select Time Slot:</label>
                <select 
                    value={selectedTimeSlot} 
                    onChange={(e) => setSelectedTimeSlot(e.target.value)} 
                    style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <option value="">All Time Slots</option>
                    {timeSlots.length > 0 ? (
                        timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>{slot}</option>
                        ))
                    ) : (
                        <option value="">Loading time slots...</option>
                    )}
                </select>
            </div>
            <div>
                <label>Attendance Date:</label>
                <input
                    type="date"
                    value={attendanceDate}
                    onChange={(e) => setAttendanceDate(e.target.value)}
                    style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
            </div>

            <h3 style={{ marginTop: '20px' }}>Select Students for Attendance</h3>
            {filteredStudents.length > 0 ? (
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f4f4f4' }}>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gender</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Experience</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Batch</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Time Slot</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.phone}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.email}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.gender}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.experience}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.batch}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.time_slot}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            checked={attendance[student.name] === 'Present'} 
                                            onChange={() => handleAttendanceToggle(student.name)} 
                                        />
                                        {attendance[student.name] === 'Present' ? ' Present' : ' Absent'}
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No students found for the selected time slot.</p>
            )}

            <button 
                onClick={handleSaveAttendance} 
                style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Save Attendance
            </button>
        </div>
    );
};

export default MarkAttendance;
