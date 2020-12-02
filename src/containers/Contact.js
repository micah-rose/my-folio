import React from 'react';

const Contact = () => {
    return (
        <>
          <h2 style={{fontSize: "80px"}}>Contact</h2>
            <hr />
          <div className="about-content">
            <p className="text-center">Thank you SO much for visiting my site!! I hope to see you back soon.</p>
            <iframe src="https://giphy.com/embed/8Bl38gdtUK7WDdi59y" 
            title="Adios"
            width="480" 
            height="480" 
            margin="auto"
            frameBorder="0" 
            className="giphy-embed" 
            allowFullScreen></iframe><p>
            <a style={{color: "black", fontSize: "15px"}} href="https://giphy.com/gifs/foxhomeent-8Bl38gdtUK7WDdi59y">via GIPHY</a></p>
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