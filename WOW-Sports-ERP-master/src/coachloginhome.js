import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CoachLoginHome() {
    // State variables to hold data
    const [bookings, setBookings] = useState([]);

    // Fetch bookings data when component mounts
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('/api/applications/bookforplay');
                const data = await response.json();
                setBookings(data); // Store the fetched bookings data
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            {/* Header */}
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

            {/* Bookings Table */}
            <h2 style={{ textAlign: 'center', marginTop: '40px', color: '#34495e' }}>Bookings</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginTop: '20px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#ecf0f1' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Sport</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Phone</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Date</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.sport}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.email}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.phone}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.date}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CoachLoginHome;
