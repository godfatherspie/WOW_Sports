import React from 'react';
import { useNavigate } from 'react-router-dom';

function FootballPage() {
    const navigate = useNavigate();

    const handleBookForPlay = () => {
        navigate('/book-for-play', { state: { sport: 'Football' } });
    };

    const handleJoinCoaching = () => {
        navigate('/join-coaching', { state: { sport: 'Football' } });
    };

    return (
        <section id="football" style={{
            padding: '60px 20px',
            textAlign: 'center',
            transition: 'background-color 0.3s ease-in-out'
        }}>
            <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '40px',
                transition: 'transform 0.3s ease-in-out'
            }}>Football Coaching</h2>
            <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>
                Our football program offers expert coaching and regular matches for players of all ages and levels.
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', listStyleType: 'none', padding: '0' }}>
                <li>✔️ Coaching for all age groups</li>
                <li>✔️ Regular practice sessions and matches</li>
                <li>✔️ State-of-the-art football field</li>
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

export default FootballPage;
