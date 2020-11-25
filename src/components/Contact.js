import React from 'react';

const Contact = () => {
    return (
        <>
          <div className="container">
          <div className="contact-me">
            <h2 id="contact-me">Contact</h2>
            <p className="text-center">I'd love to hear from you!</p>

            <div className="row test">
              <div className="col-md-4">
                <p><span className="glyphicon glyphicon-phone"></span>: <a href="https://github.com/micah-rose" target="_blank">GitHub</a></p>
                <p><span className="glyphicon glyphicon-globe"></span>: <a href="https://www.linkedin.com/in/micah-lund-a75812178/" target="_blank">LinkedIn</a></p>
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
          </div>
        </>
    )
}

export default Contact;