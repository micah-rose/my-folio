import React from 'react';

const Modal2 = () => {
    return (
        <>
        <div className="modal fade" id="myModalTwo" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>React Tetris</h2>
                </div>
                <div className="modal-body">
                  <p>React Tetris was built to demonstrate using timeouts and intervals for a team 
                    of developers. It's your typical game of Tetris that uses hooks, mathematical logic, 
                    arrays, and styled components which brought me new insight on how to develop future 
                    projects. Although I had followed an online tutorial, there was still a lot of challenge 
                    to complete this game. My to do's for this project are to refactor the code to make it 
                    mobile friendly and include a landing page that will allow a player to choose their own 
                    theme (with different backgrounds and colors) before starting a new game. Additionally I 
                    would like to add music that speeds up as a player advances levels.</p>
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

export default Modal2;