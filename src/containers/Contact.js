import React from 'react';
import ThankYou from '../components/ThankYou';

const Contact = () => {
    return (
        <>
          <h2 style={{fontSize: "80px"}}>Contact</h2>
            <hr />
          <div className="about-content">
            <ThankYou />
            <br />

            <p>If you have any questions, feedback, or are interested in a 
            copy of my resume please reach out via my LinkedIn profile.</p>
            <div className="row test">
              <div className="col-md-4">
                <p><span className="glyphicon glyphicon-phone"></span>: <a href="https://github.com/micah-rose" target="_blank" rel="noreferrer">GitHub</a></p>              
                <p><span className="glyphicon glyphicon-globe"></span>: <a href="https://www.linkedin.com/in/micah-lund-a75812178/" target="_blank" rel="noreferrer">LinkedIn</a></p>
              </div>

            </div>
            </div>
        </>
    )
}

export default Contact;