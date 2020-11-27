import React from 'react';

const Modal3 = () => {
    return (
        <>
        <div class="modal fade" id="myModalThree" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4><span class="glyphicon glyphicon-lock"></span>Project 3</h4>
                </div>
                <div class="modal-body">
                  <p>Details about Project 3.</p>
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

export default Modal3;