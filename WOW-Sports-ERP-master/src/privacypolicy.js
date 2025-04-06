import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={{
            padding: '40px',
            maxWidth: '900px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#2a9d8f',
                marginBottom: '30px',
                fontSize: '36px',
                fontWeight: 'bold',
                letterSpacing: '1px'
            }}>Privacy Policy</h1>

            <p style={{ fontSize: '16px', color: '#333', marginBottom: '30px' }}>
                This Privacy Policy outlines how <strong>Wow Sports and Fitness</strong> collects, uses, and protects your personal information when you visit or interact with our sports website. By using our site, you agree to the terms of this policy.
            </p>

            <h2 style={{ fontSize: '24px', color: '#2a9d8f', marginBottom: '20px' }}>1. Information We Collect</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px', color: '#555', fontSize: '18px' }}>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact information that you provide when signing up, contacting us, or registering for events.</li>
                <li><strong>Account Information:</strong> Login credentials (username and password) and sports preferences, if you create an account on our site.</li>
                <li><strong>Payment Information:</strong> When purchasing goods, services, or memberships, payment details such as credit/debit card information may be collected.</li>
                <li><strong>Technical Data:</strong> Information collected automatically through cookies and analytics tools, such as IP addresses, browser type, device information, and website usage statistics.</li>
            </ul>

            <h2 style={{ fontSize: '24px', color: '#2a9d8f', marginBottom: '20px' }}>2. How We Use Your Information</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px', color: '#555', fontSize: '18px' }}>
                <li>To personalize your experience on the website.</li>
                <li>To manage user accounts and provide customer support.</li>
                <li>To facilitate event registrations, memberships, and coaching services.</li>
                <li>To send newsletters, updates, and promotional content (with your consent).</li>
                <li>To process payments and complete transactions.</li>
                <li>To improve the functionality and performance of the website through analytics and technical diagnostics.</li>
            </ul>

            <h2 style={{ fontSize: '24px', color: '#2a9d8f', marginBottom: '20px' }}>3. Sharing of Information</h2>
            <p style={{ color: '#555', fontSize: '18px', marginBottom: '30px' }}>
                We may share your personal information with:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px', color: '#555', fontSize: '18px' }}>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us with website management, payment processing, email marketing, and data analysis.</li>
                <li><strong>Legal Requirements:</strong> If required by law, we may disclose your information to comply with legal processes, protect our rights, or enforce our terms of service.</li>
                <li><strong>Partners:</strong> With your consent, we may share information with event organizers, sponsors, or affiliated sports programs for collaboration purposes.</li>
            </ul>

            <h2 style={{ fontSize: '24px', color: '#2a9d8f', marginBottom: '20px' }}>4. Data Security</h2>
            <p style={{ color: '#555', fontSize: '18px', marginBottom: '30px' }}>
                We are committed to protecting your personal data. We implement industry-standard security measures such as encryption, secure socket layer (SSL) technology, and regular vulnerability scans to protect your information. However, no online system is completely secure, so we cannot guarantee absolute security.
            </p>

            <h2 style={{ fontSize: '24px', color: '#2a9d8f', marginBottom: '20px' }}>5. Your Data Rights</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px', color: '#555', fontSize: '18px' }}>
                <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification:</strong> You can request that we correct any inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> You may request the deletion of your personal data.</li>
                <li><strong>Opt-out:</strong> You can unsubscribe from marketing communications or opt-out of cookies and tracking.</li>
            </ul>
        </div>
    );
};

export default PrivacyPolicy;
