import React from 'react';
import ProfileLinks from '../components/ProfileLinks';
import Feedback from '../components/InputForm';

const Contact = () => {
    return (
        <>
          <h2 style={{fontSize: "80px"}}>Contact</h2>
            <hr />
          <div className="about-content">
            <Feedback />
            <ProfileLinks />
            </div>
        </>
    )
}

export default Contact;