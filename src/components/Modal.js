import React from 'react';

const Modal = () => {
    return (
        <>
        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                <h2>Star Match</h2>
                </div>
                <div className="modal-body">
                  <p>Star Match was a demo project built while taking an online course through
                  Pluralsight. It's a simple numbers game where a player needs to match a number 
                  to the number of stars displayed before the time runs out. It demonstrates how
                  to use useState, useEffect, and utility files to get a finish product. Some things 
                  I'd like to improve with this application is developing a start button to prevent
                  the timer from starting right when the page loads, upgrading the design for a 
                  better visual, and to write some back end logic to store a player's best time.
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal" >
                    <span className="glyphicon glyphicon-remove"></span> Cancel
                  </button>
                </div>
              </div>
            </div>
        </div>
        </>
    )
}

export default Modal;