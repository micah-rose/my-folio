import React from 'react';

const Modal3 = () => {
    return (
        <>
        <div class="modal fade" id="myModalThree" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h2>JS Weather App</h2>
                </div>
                <div class="modal-body">
                  <p>JS Weather App was a quick project I did to develop a weather app that would display
                  the current weather forecase based on a users geological location and making a call to a 
                  weather API. What I liked most about this project is it gave me exposure to working with 
                  an API and revealing how easy it can be. After I completed this app it influenced me to
                  focus more on projects centered around APIs and how I can build them. The app is currently
                  only taking in a user's location in development, not in production.</p>
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