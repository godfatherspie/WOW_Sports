import React from 'react';

function GymPage() {
    return (
        <section id="gym" style={{
            padding: '60px 20px',
            textAlign: 'center',
            transition: 'background-color 0.3s ease-in-out'
        }}>
            <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '40px',
                transition: 'transform 0.3s ease-in-out'
            }}>Gym Facilities</h2>
            <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>
                Our fully equipped gym offers modern machines, weightlifting equipment, and personal trainers.
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', listStyleType: 'none', padding: '0' }}>
                <li>✔️ Free weights and cardio machines</li>
                <li>✔️ Personal training sessions</li>
                <li>✔️ Group fitness classes</li>
            </ul>
        </section>
    );
}

export default GymPage;
