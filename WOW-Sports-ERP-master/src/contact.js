import React from 'react';

const ContactUs = () => {
    const textStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        margin: '0 auto 20px', // Add bottom margin for spacing
        textAlign: 'justify',
        maxWidth: '1200px'
    };

    return (
        <section id="contact" style={{
            padding: '80px 20px',
            backgroundColor: '#f7f7f7',
            color: '#333',
            textAlign: 'center'
        }}>
            {/* Exciting Intro Section */}
            <div style={{
                backgroundColor: '#007BFF',
                padding: '20px',
                borderRadius: '8px',
                color: '#fff',
                marginBottom: '50px'
            }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Join the Best Sports & Fitness Experience!</h1>
                <p style={{ ...textStyle }}>
                    At WOW Sports and Fitness, we're dedicated to transforming your fitness journey. From expert coaching to personalized training sessions, our programs are designed for your success. Reach out to us and start your fitness adventure today!
                </p>
            </div>

            {/* Contact Us Heading */}
            <h2 style={{
                fontSize: '2.5rem',
                margin: '50px 0 20px', // Adjust margin for spacing
                color: '#007BFF',
                fontWeight: 'bold'
            }}>Contact Us</h2>

            {/* Introduction */}
            <p style={textStyle}>
                We'd love to hear from you! Whether you have questions about our programs, need assistance, or just want to share your experience, feel free to reach out to us.
            </p>

            {/* Contact Details - Centered */}
            <div style={{
                marginBottom: '40px',
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h3 style={{ fontSize: '2rem', color: '#007BFF', marginBottom: '20px' }}>Our Coaching Center</h3>
                <p style={{ ...textStyle, textAlign: 'center' }}><strong>WOW Sports and Fitness</strong></p>
                <p style={{ ...textStyle, textAlign: 'center' }}>Survey No. 14, Ambegao</p>
                <p style={{ ...textStyle, textAlign: 'center' }}>Near Pride School, Katraj</p>
                <p style={{ ...textStyle, textAlign: 'center' }}>Pune, Maharashtra 411046</p>
                <p style={{ ...textStyle, textAlign: 'center' }}><strong>Email:</strong> info@wowsports.com</p>
                <p style={{ ...textStyle, textAlign: 'center' }}><strong>Phone:</strong> (123) 456-7890</p>
            </div>

            {/* Coaches Contact Info */}
            <h3 style={{ fontSize: '2rem', color: '#007BFF', marginBottom: '20px' }}>Meet Our Coaches</h3>
            <table style={{
                width: '80%',
                margin: '0 auto',
                marginBottom: '40px',
                borderCollapse: 'collapse'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#007BFF', color: '#fff' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Coach</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Specialty</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>John Doe</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>Cricket Coach</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>(111) 222-3333</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f9f9' }}>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>Jane Smith</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>Badminton Coach</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>(444) 555-6666</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>Michael Lee</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>Football Coach</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>(777) 888-9999</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f9f9' }}>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>Emily Clark</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>Gym Trainer</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '1.2rem' }}>(000) 111-2222</td>
                    </tr>
                </tbody>
            </table>

            {/* Feedback Section */}
            <h3 style={{ fontSize: '2rem', color: '#007BFF', marginBottom: '20px' }}>Feedback</h3>
            <p style={{ ...textStyle, textAlign: 'center', marginBottom: '20px' }}>
                We value your feedback! Please let us know about your experience with our coaching programs.
            </p>
            <textarea placeholder="Your Feedback" style={{
                width: '80%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                height: '150px',
                marginBottom: '20px',
                fontSize: '1.2rem',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}></textarea>
            <br />
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.2rem'
            }}>
                Submit Feedback
            </button>

            {/* Location Map */}
            <h3 style={{ fontSize: '2rem', color: '#007BFF', margin: '40px 0 20px' }}>Our Location</h3>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.622656956195!2d73.8396937!3d18.4554343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb2ae8257fb1%3A0xe416f8d2b5505736!2sWOW%20SPORTS%20AND%20FITNESS!5e0!3m2!1sen!2sin!4v1726825353740!5m2!1sen!2sin" 
                    width="100%" 
                    height="350" 
                    style={{ border: '0', borderRadius: '8px' }} 
                    allowFullScreen 
                    loading="lazy">
                </iframe>
            </div>

            {/* Policies Section */}
            <h3 style={{ fontSize: '2rem', color: '#007BFF', marginBottom: '20px', textAlign: 'center' }}>Our Policies</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: 'transparent',
                    color: '#007BFF',
                    border: 'none',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    margin: '10px 0'
                }} onClick={() => window.location.href='/privacy-policy'}>
                    Privacy Policy
                </button>
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: 'transparent',
                    color: '#007BFF',
                    border: 'none',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    margin: '10px 0'
                }} onClick={() => window.location.href='/terms-of-service'}>
                    Terms of Service
                </button>
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: 'transparent',
                    color: '#007BFF',
                    border: 'none',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    margin: '10px 0'
                }} onClick={() => window.location.href='/cancellation-policy'}>
                    Cancellation Policy
                </button>
            </div>
        </section>
    );
};

export default ContactUs;
