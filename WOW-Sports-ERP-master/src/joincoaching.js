import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function JoinCoaching() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        sport: 'Cricket',
        name: '',
        email: '',
        phone: '',
        gender: 'Male', 
        experience: 'Beginner', 
        timeSlot: 'Morning',
        time: '6am-7am',
        goals: ''
    });

    const morningTimings = ['6am-7am', '7am-8am', '8am-9am', '9am-10am'];
    const eveningTimings = ['4pm-5pm', '5pm-6pm', '6pm-7pm', '7pm-8pm', '8pm-9pm', '9pm-10pm'];

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

    const handleTimeSlotChange = (e) => {
        const selectedTimeSlot = e.target.value;
        const defaultTime = selectedTimeSlot === 'Morning' ? '6am-7am' : '4pm-5pm';
        setFormData({
            ...formData,
            timeSlot: selectedTimeSlot,
            time: defaultTime
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/applications/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                setFormData({
                    sport: 'Cricket',
                    name: '',
                    email: '',
                    phone: '',
                    gender: 'Male',
                    experience: 'Beginner',
                    timeSlot: 'Morning',
                    time: '6am-7am',
                    goals: ''
                });
            } else {
                alert('Error: ' + result.message);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Error submitting application');
        }
    };

    const sectionStyle = {
        padding: '50px 20px',
        backgroundColor: '#f9f9f9',
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
            <h2>Join Coaching</h2>
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
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </label>
                <label style={labelStyle}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </label>
                <label style={labelStyle}>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </label>
                <label style={labelStyle}>
                    Gender:
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        style={selectStyle}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label style={labelStyle}>
                    Experience Level:
                    <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        style={selectStyle}
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </label>
                <label style={labelStyle}>
                    Preferred Slot:
                    <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleTimeSlotChange}
                        style={selectStyle}
                    >
                        <option value="Morning">Morning</option>
                        <option value="Evening">Evening</option>
                    </select>
                </label>
                <label style={labelStyle}>
                    Preferred Time:
                    <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        style={selectStyle}
                    >
                        {formData.timeSlot === 'Morning'
                            ? morningTimings.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))
                            : eveningTimings.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))
                        }
                    </select>
                </label>
                <label style={labelStyle}>
                    Goals:
                    <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </label>
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Apply Now
                </button>
            </form>
        </section>
    );
}

export default JoinCoaching;
