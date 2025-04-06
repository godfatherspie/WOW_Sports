import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BookForPlay() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        sport: 'Cricket',  
        name: '',
        email: '',
        phone: '',
        date: '',
        time: 12,  // Default value for time (12 PM)
        additionalInfo: ''
    });

    useEffect(() => {
        if (location.state && location.state.sport) {
            setFormData(prevData => ({
                ...prevData,
                sport: location.state.sport
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleTimeChange = (e) => {
        setFormData({
            ...formData,
            time: parseInt(e.target.value) // Parsing the value to integer
        });
    };

    const formatTime = (value) => {
        const timeValue = value + 12; // Converting 0-6 to 12-18 (12 PM to 6 PM)
        const period = timeValue >= 12 && timeValue < 24 ? 'PM' : 'AM';
        const formattedTime = timeValue > 12 ? timeValue - 12 : timeValue;
        return `${formattedTime}:00 ${period}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
            alert('Please fill all required fields.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/applications/bookforplay', { // Correct endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Sending formData as JSON
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert(`Booking Submitted for ${formData.sport} at ${formatTime(formData.time)}`);
                console.log('Booking data saved:', data);
                setFormData({
                    sport: 'Cricket',
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: 12,
                    additionalInfo: '',
                });
            } else {
                alert(`Failed to submit booking: ${data.message}`);
                console.error('Server error:', data);
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('There was an error submitting your booking. Please try again.');
        }
    };

    const sectionStyle = {
        padding: '50px 20px',
        backgroundColor: '#f0f8ff',
        textAlign: 'center'
    };

    const formStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
    };

    const labelStyle = {
        marginBottom: '15px',
        textAlign: 'left'
    };

    const inputStyle = {
        padding: '10px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%'
    };

    const selectStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        marginBottom: '20px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
        transition: 'background-color 0.3s ease-in-out'
    };

    const buttonHoverStyle = {
        backgroundColor: '#555'
    };

    return (
        <section style={sectionStyle}>
            <h2>Book Ground for Play</h2>
            <form style={formStyle} onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    Select Sport:
                    <select
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        style={selectStyle}
                    >
                        <option value="Cricket">Cricket</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Football">Football</option>
                    </select>
                </label>
                <label style={labelStyle}>
                    Full Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Phone:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Preferred Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Preferred Time Slot (12 PM - 6 PM):
                    <input
                        type="range"
                        name="time"
                        min="0"
                        max="6"
                        value={formData.time}
                        onChange={handleTimeChange}
                        style={inputStyle}
                    />
                    <div>Selected Time: {formatTime(formData.time)}</div>
                </label>
                <label style={labelStyle}>
                    Additional Info (optional):
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        style={inputStyle}
                        maxLength={75}
                    ></textarea>
                </label>

                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Submit Booking
                </button>
            </form>
        </section>
    );
}

export default BookForPlay;
