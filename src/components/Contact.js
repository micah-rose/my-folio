import React from 'react';

const Contact = () => {
    return (
        <>
          <h2 style={{fontSize: "80px"}}>Contact</h2>
            <hr />
          <div className="about-content">
            <p className="text-center">Thank you SO much for visiting my site!! I hope to see you back soon.</p>
            <iframe src="https://giphy.com/embed/8Bl38gdtUK7WDdi59y" 
            width="480" 
            height="480" 
            frameBorder="0" 
            class="giphy-embed" 
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
              {/* <div className="col-md-8">
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                  </div>
                </div>
                <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <button className="btn pull-right" type="submit">Send</button>
                  </div>
                </div>
              </div> */}
            </div>
            </div>
        </>
    )
}

export default Contact;