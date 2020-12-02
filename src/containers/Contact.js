import React from 'react';
import ProfileLinks from '../components/ProfileLinks';
import ThankYou from '../components/ThankYou';

const Contact = () => {
    return (
        <>
          <h2 style={{fontSize: "80px"}}>Contact</h2>
            <hr />
          <div className="about-content">
            <ThankYou />
            <br />
            <ProfileLinks />
            </div>
        </>
    )
}

export default Contact;