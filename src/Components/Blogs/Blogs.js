import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h4>Differrence between Authentication and Authorization!</h4>
            <p>Authentication indicates whether a user is valid to access the website or to take the services. Authorization means a user is not only valid to take the services but he also has the ability to perform some tasks on the platform. </p>

            <h4>Why do we use firebase? What other options do you have to implement authentication? </h4>
            <p>
                Firebase is an open sources easy authentication platform. As a newbie we use it to implement authentication of website.
            </p>
            <p>
                There are several platforms which provide authentication other than firebase. Like: Prove MFA | DUO Access | HID Global IAM | ESET Secure Authentication | Ping Identity | TypingDNA Verify 2FA | Thales SafeNet Trusted Access | ManageEngine ADSelfService Plus | Entrust Identity Enterprise | Okta Adaptive Multi-Factor Authentication
            </p>
            <h4>
                What other services does firebase provide other than authentication?
            </h4>
            <p>There are many services which Firebase provides, Most useful of them are:</p>
            <ul>
                <li> Cloud Firestore
                </li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Dynamic Links</li>
            </ul>
        </div>
    );
};

export default Blogs;