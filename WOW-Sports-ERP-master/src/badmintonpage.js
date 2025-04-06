 import React from 'react';
import { useNavigate } from 'react-router-dom';

function BadmintonPage() {
    const navigate = useNavigate();

    const handleBookForPlay = () => {
        navigate('/book-for-play', { state: { sport: 'Badminton' } });
    };

    const handleJoinCoaching = () => {
        navigate('/join-coaching', { state: { sport: 'Badminton' } });
    };

    return (
        <section id="badminton" style={{
            padding: '60px 20px',
            textAlign: 'center',
            transition: 'background-color 0.3s ease-in-out'
        }}>
            <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '40px',
                transition: 'transform 0.3s ease-in-out'
            }}>Badminton Training</h2>
            <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>
                Train at our state-of-the-art indoor badminton courts with expert coaches.
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', listStyleType: 'none', padding: '0' }}>
                <li>✔️ Indoor courts with international standards</li>
                <li>✔️ Professional coaching for all skill levels</li>
                <li>✔️ Equipment rental available</li>
            </ul>
            <div style={{ marginTop: '40px' }}>
                <button onClick={handleBookForPlay} style={{
                    padding: '10px 20px',
                    margin: '10px',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Book for Play
                </button>
                <button onClick={handleJoinCoaching} style={{
                    padding: '10px 20px',
                    margin: '10px',
                    backgroundColor: '#555',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Join Coaching
                </button>
            </div>
        </section>
    );
}

export default BadmintonPage;
