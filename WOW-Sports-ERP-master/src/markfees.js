import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MarkFees = () => {
    const [students, setStudents] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [paymentOption, setPaymentOption] = useState('');
    const [feeAmount, setFeeAmount] = useState(2000);
    const [feesStatus, setFeesStatus] = useState([]); // Now an array of student IDs with fee status
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

    const handleFeeStatusToggle = (studentId) => {
        setFeesStatus(prev => {
            const statusIndex = prev.findIndex(status => status.studentId === studentId);
            if (statusIndex === -1) {
                // If student isn't in the list, add them
                return [...prev, { studentId, status: 'Paid' }];
            } else {
                // If student exists, toggle the status
                const newStatus = prev[statusIndex].status === 'Paid' ? 'Unpaid' : 'Paid';
                const updatedFeesStatus = [...prev];
                updatedFeesStatus[statusIndex] = { studentId, status: newStatus };
                return updatedFeesStatus;
            }
        });
    };

    const handleSaveFees = async () => {
        if (!paymentOption || !selectedTimeSlot) {
            alert('Please select both payment option and time slot');
            return;
        }

        // Prepare data for API
        const feesData = {
            feesStatus: feesStatus.map(fee => ({
                studentId: fee.studentId,
                status: fee.status,
            })),
            feeAmount,
            paymentOption,
            selectedTimeSlot
        };

        console.log('Sending Fees Data:', feesData); // Log to ensure correct data structure

        try {
            const response = await fetch('http://localhost:5000/api/applications/fees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feesData),
            });

            if (response.ok) {
                alert('Fees saved successfully!');
            } else {
                const errorResponse = await response.json();
                console.error('Error saving fees:', errorResponse);
                alert('Error saving fees');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving fees');
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

            <h2>Mark Fees</h2>

            <div style={{ marginBottom: '10px' }}>
                <label>Select Time Slot:</label>
                <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                >
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

            <div style={{ marginBottom: '10px' }}>
                <label>Payment Option:</label>
                <select
                    value={paymentOption}
                    onChange={(e) => setPaymentOption(e.target.value)}
                    style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                    <option value="">Select Payment Option</option>
                    <option value="Cash">Cash</option>
                    <option value="Digital">Digital</option>
                    <option value="Cheque">Cheque</option>
                </select>
            </div>

            <h3 style={{ marginTop: '20px' }}>Select Students for Fees</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f4f4f4' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fee Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={feesStatus.some(fee => fee.studentId === student.id && fee.status === 'Paid')}
                                        onChange={() => handleFeeStatusToggle(student.id)}
                                    />
                                    Paid
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={handleSaveFees}
                    style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '4px', backgroundColor: '#2c3e50', color: '#fff' }}
                >
                    Save Fees
                </button>
            </div>
        </div>
    );
};

export default MarkFees;
