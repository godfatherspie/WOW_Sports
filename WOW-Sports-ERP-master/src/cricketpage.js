import React from 'react';
import { useNavigate } from 'react-router-dom';

function CricketPage() {
    const navigate = useNavigate();

    const handleBookForPlay = () => {
        navigate('/book-for-play', { state: { sport: 'Cricket' } });
    };

    const handleJoinCoaching = () => {
        navigate('/join-coaching', { state: { sport: 'Cricket' } });
    };

    return (
        <section id="cricket" style={{
            padding: '60px 20px',
            textAlign: 'center',
            transition: 'background-color 0.3s ease-in-out',
            backgroundColor: '#f9f9f9'
        }}>
            <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '40px',
                transition: 'transform 0.3s ease-in-out',
                color: '#333',
                fontFamily: 'Arial, sans-serif'
            }}>Cricket Training</h2>
            <p style={{ 
                fontSize: '1.2rem', 
                color: '#555', 
                marginBottom: '20px',
                fontFamily: 'Arial, sans-serif'
            }}>
                Join our professional cricket training sessions and practice in well-equipped nets. Our experienced coaches will help you develop your skills.
            </p>
            <ul style={{ 
                fontSize: '1rem', 
                color: '#333', 
                listStyleType: 'none', 
                padding: '0',
                fontFamily: 'Arial, sans-serif'
            }}>
                <li>✔️ Specialized coaching for all levels</li>
                <li>✔️ Access to top-notch practice facilities</li>
                <li>✔️ Regular matches and tournaments</li>
            </ul>
            <div style={{ marginTop: '40px' }}>
                <button
                    onClick={handleBookForPlay}
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#333'}
                >
                    Book for Play
                </button>
                <button
                    onClick={handleJoinCoaching}
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        backgroundColor: '#555',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#555'}
                >
                    Join Coaching
                </button>
            </div>
        </section>
    );
}

export default CricketPage;
