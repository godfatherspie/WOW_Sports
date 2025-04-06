import React, { useState } from 'react';

const CancellationPolicy = () => {
    const [showForm, setShowForm] = useState(false);

    const handleFormToggle = () => {
        setShowForm(!showForm);
    };

    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333', fontSize: '36px' }}>Cancellation Policy</h1>

            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                Welcome to Wow Sports and Fitness. We understand that plans can change, and we strive to offer a clear and fair cancellation policy for our users. 
                Please take a moment to review our cancellation terms carefully.
            </p>

            {/* Section 1: General Cancellation Policy */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>1. General Cancellation Policy</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                You may cancel your membership or booking at any time. However, the following terms apply based on the type of membership, booking, or service you have subscribed to. Refunds may be available based on the nature of the cancellation and how early the cancellation is made.
            </p>

            {/* Section 2: Membership Cancellation */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>2. Membership Cancellation</h2>
            <ul style={{ fontSize: '16px', color: '#666', textAlign: 'justify', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Monthly memberships can be canceled at any time before the next billing cycle. No refunds will be issued for partial months.</li>
                <li>Annual memberships can be canceled within the first 30 days for a full refund. After 30 days, no refunds will be issued, but you may cancel to stop future renewals.</li>
            </ul>

            {/* Section 3: Class and Event Booking Cancellation */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>3. Class and Event Booking Cancellation</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                Cancellations for classes or events can be made up to 24 hours before the scheduled time for a full refund. Cancellations made within 24 hours of the class or event will not be eligible for a refund.
            </p>

            {/* Section 4: Special Circumstances */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>4. Special Circumstances</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                In case of emergencies or other extenuating circumstances, please contact us directly, and we will work with you to find a solution, such as rescheduling or offering a credit for future services.
            </p>

            {/* Section 5: Contact Us */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>5. Contact Us</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                If you have any questions regarding our cancellation policy, or if you need to cancel a service or booking, you can reach us at:
            </p>
            <ul style={{ fontSize: '16px', color: '#666', textAlign: 'justify', listStyleType: 'none', paddingLeft: '0' }}>
                <li>Email: <a href="mailto:support@wowsportsandfitness.com">support@wowsportsandfitness.com</a></li>
                <li>Phone: +91 123-456-7890</li>
                <li>Address: Survey No. 14, Ambegao, Near Pride School, Katraj, Pune, Maharashtra 411046</li>
            </ul>

            {/* Button to Show Cancellation Form */}
            <button 
                style={{ 
                    backgroundColor: '#2a9d8f', 
                    color: 'white', 
                    padding: '10px 20px', 
                    border: 'none', 
                    cursor: 'pointer', 
                    marginTop: '30px', 
                    display: 'block', 
                    marginLeft: 'auto', 
                    marginRight: 'auto' 
                }} 
                onClick={handleFormToggle}
            >
                Request Cancellation
            </button>

            {/* Cancellation Form (Hidden until button is clicked) */}
            {showForm && (
                <form style={{ marginTop: '30px' }}>
                    <h3 style={{ color: '#2a9d8f', fontSize: '20px', textAlign: 'center' }}>Cancellation Form</h3>

                    <label style={{ fontSize: '16px', color: '#666', display: 'block', marginBottom: '10px' }}>Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }} 
                    />

                    <label style={{ fontSize: '16px', color: '#666', display: 'block', marginBottom: '10px' }}>Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }} 
                    />

                    <label style={{ fontSize: '16px', color: '#666', display: 'block', marginBottom: '10px' }}>Reason for Cancellation</label>
                    <textarea 
                        placeholder="Describe the reason for cancellation" 
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', height: '100px' }}
                    />

                    <button 
                        type="submit" 
                        style={{ 
                            backgroundColor: '#2a9d8f', 
                            color: 'white', 
                            padding: '10px 20px', 
                            border: 'none', 
                            cursor: 'pointer', 
                            marginTop: '20px', 
                            display: 'block', 
                            marginLeft: 'auto', 
                            marginRight: 'auto' 
                        }} 
                    >
                        Submit Cancellation
                    </button>
                </form>
            )}
        </div>
    );
};

export default CancellationPolicy;
