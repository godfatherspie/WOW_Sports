import React from 'react';

const About = () => {
    return (
        <section id="about" style={{
            padding: '80px 20px',
            backgroundColor: '#f7f7f7',
            color: '#333',
            textAlign: 'center'
        }}>
            {/* About Heading */}
            <h2 style={{
                fontSize: '3rem',
                marginBottom: '50px',
                color: '#007BFF',
                fontWeight: 'bold',
                transition: 'color 0.3s ease-in-out'
            }}>About WOW Sports and Fitness</h2>
            
            {/* Introduction */}
            <p style={{
                fontSize: '1.4rem',
                marginBottom: '40px',
                lineHeight: '1.8',
                maxWidth: '100%', // Allow text to take the full width
                margin: '0 auto',
                textAlign: 'justify',
                padding: '0 20px' // Add padding for better readability
            }}>
                At WOW Sports and Fitness, we believe in the transformative power of sports. Whether you're looking to stay fit, develop new skills, or compete professionally, our tailored programs will suit your needs. Here's how sports like badminton, cricket, football, and gym workouts can elevate your health and well-being.
            </p>

            {/* Section about Sports */}
            <section id="sports-benefits" style={{ marginBottom: '60px' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333', fontWeight: '600' }}>Why These Sports Matter</h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                    justifyItems: 'center'
                }}>
                    {/* Badminton Section */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ fontSize: '2rem', color: '#007BFF' }}>Badminton</h4>
                        <p>Badminton is a fast-paced racquet sport that can be played as singles or doubles. It originated in India, known as "Poona," and later evolved in England in the 19th century. It became an official Olympic sport in 1992.</p>
                        <p>Badminton improves cardiovascular health, strengthens reflexes, and enhances flexibility. It also provides mental agility, making it a perfect choice for anyone looking for a blend of fun and fitness.</p>
                        <p>Famous players like Lin Dan and P.V. Sindhu have elevated the game on a global scale. Badminton tournaments such as the BWF World Championships and the All England Open remain some of the most prestigious in the sport.</p>
                    </div>

                    {/* Cricket Section */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ fontSize: '2rem', color: '#007BFF' }}>Cricket</h4>
                        <p>Cricket is a bat-and-ball game with a rich history dating back to the 16th century in England. The International Cricket Council (ICC) governs the sport globally, with tournaments like the Cricket World Cup and T20 World Cup attracting millions of fans.</p>
                        <p>The game demands strategic thinking, focus, and physical fitness. Cricket builds endurance and teaches teamwork and leadership. With different formats like Test Cricket, ODIs, and T20s, cricket offers varied styles of play for all types of players.</p>
                    </div>

                    {/* Football Section */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ fontSize: '2rem', color: '#007BFF' }}>Football</h4>
                        <p>Football is the world's most popular sport, with a global following that connects people from all cultures. It originated in England in the mid-19th century and has since grown to become the most watched sport worldwide, with major tournaments like the FIFA World Cup and UEFA Champions League.</p>
                        <p>The game is an excellent cardiovascular workout that improves muscle tone, coordination, and agility. Football fosters teamwork, strategy, and quick decision-making under pressure.</p>
                    </div>

                    {/* Gym Workouts Section */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ fontSize: '2rem', color: '#007BFF' }}>Gym Workouts</h4>
                        <p>Gym workouts provide a personalized fitness experience, whether through weightlifting, cardio, or high-intensity interval training (HIIT). Regular gym sessions boost strength, endurance, and mental toughness, helping individuals achieve their fitness goals.</p>
                    </div>
                </div>
            </section>

            {/* Coaches Information Section */}
            <section id="coaches-info" style={{ marginBottom: '60px' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333', fontWeight: '600' }}>Meet Our Coaches</h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                    justifyItems: 'center'
                }}>
                    {/* John Doe */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ fontSize: '2rem', color: '#007BFF' }}>John Doe - Cricket Coach</h4>
                        <p>With 15 years of coaching experience, John has honed his skills in mentoring students to excel in professional cricket leagues. He holds a degree in Sports Science and has helped over 200 students achieve competitive success. John's approach focuses on teamwork, strategy, and mental toughness, which are crucial elements in cricket.</p>
                    </div>

                    {/* Jane Smith */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ fontSize: '2rem', color: '#007BFF' }}>Jane Smith - Badminton Coach</h4>
                        <p>Jane's personalized training methods have transformed many students into national-level players. Her extensive experience in the sport, coupled with a deep understanding of player development, makes her one of the most sought-after coaches. Jane emphasizes agility, reflexes, and endurance in her training programs.</p>
                    </div>

                    {/* Michael Lee */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ fontSize: '2rem', color: '#007BFF' }}>Michael Lee - Football Coach</h4>
                        <p>Michael has over 12 years of experience in coaching football, helping over 150 students develop professional careers in the sport. His coaching style integrates both physical conditioning and strategic planning, preparing players to perform under pressure while maintaining excellent physical fitness.</p>
                    </div>

                    {/* Emily Clark */}
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ fontSize: '2rem', color: '#007BFF' }}>Emily Clark - Gym Trainer</h4>
                        <p>Emily is a certified personal trainer with 8 years of experience. Her focus is on strength training, endurance building, and cardiovascular fitness. She has successfully guided over 100 clients in reaching their fitness goals, whether through personalized training plans or group sessions.</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
