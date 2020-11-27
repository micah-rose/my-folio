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
                  <p>Details for Star Match
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