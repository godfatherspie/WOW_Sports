import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CoachLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const containerStyle = {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    };

    const leftSectionStyle = {
        flex: 1,
        backgroundImage: 'url(https://example.com/sports-background.jpg)', // Sports background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)', // Dark overlay to make content stand out
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        textAlign: 'center',
    };

    const leftTextStyle = {
        fontSize: '2.5rem',
        marginBottom: '20px',
        fontWeight: 'bold',
        lineHeight: '1.2',
    };

    const subTextStyle = {
        fontSize: '1.2rem',
        fontStyle: 'italic',
    };

    const rightSectionStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        width: '400px',
        textAlign: 'center',
    };

    const inputStyle = {
        width: '100%',
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '16px',
    };

    const buttonStyle = {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '15px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        width: '100%',
        fontSize: '18px',
        transition: 'background-color 0.3s ease, transform 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    };

    const errorStyle = {
        color: 'red',
        marginBottom: '20px',
    };

    const handleLogin = () => {
        if (username === 'abc' && password === '123') {
            setError('');
            navigate('/coach-login-home');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div style={containerStyle}>
            {/* Left Section with background image and overlay */}
            <div style={leftSectionStyle}>
                <div style={overlayStyle}>
                    <h1 style={leftTextStyle}>Push Your Limits</h1>
                    <p style={subTextStyle}>Join the revolution in sports & fitness</p>
                </div>
            </div>

            {/* Right Section with Login Form */}
            <div style={rightSectionStyle}>
                <div style={formStyle}>
                    <h2>Coach Login</h2>
                    {error && <p style={errorStyle}>{error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        style={inputStyle}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={inputStyle}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                        onClick={handleLogin}
                        style={buttonStyle}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CoachLogin;
