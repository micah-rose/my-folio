import React from 'react';

const Modal = () => {
    return (
        <>
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                <h2>Star Match</h2>
                </div>
                <div class="modal-body">
                  <p>Star Match was a demo project built while taking an online course through
                  Pluralsight. It's a simple numbers game where a player needs to match a number 
                  to the number of stars displayed before the time runs out. It demonstrates how
                  to use useState, useEffect, and utility files to get a finish product. Some things 
                  I'd like to improve with this application is developing a start button to prevent
                  the timer from starting right when the page loads, upgrading the design for a 
                  better visual, and to write some back end logic to store a player's best time.
                  </p>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal" >
                    <span class="glyphicon glyphicon-remove"></span> Cancel
                  </button>
                </div>
              </div>
            </div>
        </div>
        </>
    )
}

export default Modal;