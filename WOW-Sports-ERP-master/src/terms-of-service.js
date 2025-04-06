import React, { useState } from 'react';

const TermsOfService = () => {
    const [agreed, setAgreed] = useState(false);

    const handleAgree = () => {
        setAgreed(true);
        alert('Thank you for agreeing to the terms of service!');
        // Here you can also redirect the user or trigger additional logic
    };

    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333', fontSize: '36px' }}>Terms of Service</h1>
            
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                Welcome to Wow Sports and Fitness! By using our website, you agree to comply with and be bound by the following terms and conditions. 
                Please review them carefully.
            </p>

            {/* Section 1: Introduction */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>1. Introduction</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                These Terms of Service govern your use of our website and services provided by Wow Sports and Fitness. By accessing or using any part of 
                our site, you agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our website or services.
            </p>

            {/* Section 2: Eligibility */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>2. Eligibility</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                Our services are available to individuals who are at least 18 years old. By using our site, you represent and warrant that you are of legal age to 
                enter into a binding contract and that all information you provide is accurate and truthful.
            </p>

            {/* Section 3: Use of Services */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>3. Use of Services</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                You agree to use Wow Sports and Fitness for lawful purposes only. You must not misuse our services, which includes but is not limited to engaging 
                in illegal activities, submitting false or misleading information, or attempting to disrupt the functionality of the website. Violation of these 
                terms will result in the suspension or termination of your account.
            </p>

            {/* Section 4: Registration and Accounts */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>4. Registration and Accounts</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                To access certain features of our website, you may be required to register for an account. During registration, you agree to provide accurate and 
                up-to-date information. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under 
                your account. If you suspect any unauthorized use of your account, you must notify us immediately.
            </p>

            {/* Section 5: Payment and Refunds */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>5. Payment and Refunds</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                If you purchase any service, membership, or product through Wow Sports and Fitness, all applicable fees and charges will be clearly presented at 
                checkout. Payment will be processed securely through our third-party payment gateway. If you wish to request a refund, please review our refund 
                policy on our website. Refunds are generally subject to eligibility and will be processed in accordance with our policies.
            </p>

            {/* Section 6: Changes to the Terms */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>6. Changes to the Terms</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                Wow Sports and Fitness reserves the right to modify these Terms of Service at any time. However, if any changes are made, users will be notified 
                in advance via email or a notification on the website. If you are a subscriber, the new terms will apply only after the end of your current 
                subscription period. You are responsible for regularly reviewing these terms to stay informed of any changes.
            </p>

            {/* Section 7: Contact Information */}
            <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>7. Contact Information</h2>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'justify' }}>
                If you have any questions regarding these Terms of Service, you may contact us at:
            </p>
            <ul style={{ fontSize: '16px', color: '#666' }}>
                <li>Email: <a href="mailto:support@wowsportsandfitness.com">support@wowsportsandfitness.com</a></li>
                <li>Phone: +91 123-456-7890</li>
                <li>Address: Survey No. 14, Ambegao, Near Pride School, Katraj, Pune, Maharashtra 411046</li>
            </ul>

            {/* I Agree Button */}
            {!agreed && (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <button 
                        onClick={handleAgree} 
                        style={{
                            backgroundColor: '#2a9d8f', 
                            color: 'white', 
                            border: 'none', 
                            padding: '15px 30px', 
                            fontSize: '18px', 
                            cursor: 'pointer', 
                            borderRadius: '5px'
                        }}
                    >
                        I Agree
                    </button>
                </div>
            )}

            {agreed && (
                <p style={{ textAlign: 'center', color: '#2a9d8f', marginTop: '40px' }}>
                    Thank you for agreeing to the terms of service!
                </p>
            )}
        </div>
    );
};

export default TermsOfService;
