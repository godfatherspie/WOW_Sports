import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddStudentPage = () => {
    // New student form state
    const [newStudent, setNewStudent] = useState({
        name: '',
        phone: '',
        email: '',
        gender: 'Male',
        experience: 'Beginner',
        batch: 'Morning',
        timeSlot: '9:00 AM - 10:00 AM',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleAddStudent = async () => {
        if (newStudent.name.trim() !== '' && newStudent.phone.trim() !== '' && newStudent.email.trim() !== '') {
            // Optional: Add email and phone validation
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phoneRegex = /^[0-9]{10}$/; // Example for validating 10-digit phone number
    
            if (!emailRegex.test(newStudent.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            if (!phoneRegex.test(newStudent.phone)) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }
    
            try {
                console.log('Adding student with data:', newStudent);  // Debugging: check student data
                const response = await fetch('http://localhost:5000/api/applications/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newStudent),
                });
    
                const result = await response.json();
                console.log('API Response:', result);  // Debugging: check response from API
    
                if (response.ok) {
                    alert('Student added successfully!');
                    setNewStudent({
                        name: '',
                        phone: '',
                        email: '',
                        gender: 'Male',
                        experience: 'Beginner',
                        batch: 'Morning',
                        timeSlot: '9:00 AM - 10:00 AM',
                    });
                } else {
                    alert('Error: ' + result.message);
                }
            } catch (error) {
                console.error('Error adding student:', error);
                alert('Error adding student');
            }
        } else {
            alert('Please fill out all fields.');
        }
    };
    

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '15px 0' }}>
                <div style={{ width: '90%', margin: '0 auto', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '26px', fontWeight: 'bold' }}>Coach Dashboard</div>
                    <nav>
                        <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/addstudents" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Add Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/viewstudents" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>View Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/markattendance" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mark Attendance</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/markfees" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mark Fees</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Add Student Form */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
                <h2>Add New Student</h2>
                <input
                    type="text"
                    name="name"
                    value={newStudent.name}
                    onChange={handleInputChange}
                    placeholder="Enter student name"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <input
                    type="tel"
                    name="phone"
                    value={newStudent.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <input
                    type="email"
                    name="email"
                    value={newStudent.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <div style={{ marginBottom: '10px' }}>
                    <label>Gender:</label>
                    <select name="gender" value={newStudent.gender} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Experience Level:</label>
                    <select name="experience" value={newStudent.experience} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Batch:</label>
                    <select name="batch" value={newStudent.batch} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                        <option value="Morning">Morning</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Time Slot:</label>
                    <select name="timeSlot" value={newStudent.timeSlot} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                        <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                        <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
                    </select>
                </div>
                <button onClick={handleAddStudent} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save Student</button>
            </div>
        </div>
    );
};

export default AddStudentPage;
