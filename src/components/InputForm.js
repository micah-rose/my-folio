import React from 'react';

const InputForm = () => {
    return (
        <>
            <div className="col-md-8">
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
            </div>
        </>
    )
}

export default InputForm;