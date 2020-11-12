import React from 'react';

const Quotes = props => {
    return (
        <>
            <div
                id="myCarousel"
                className="carousel slide text-center"
                data-ride="carousel">

                <br />
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox" >
                    <div className="item active">
                        <h4>"Life moves when you do."</h4>
                        <br />
                    </div>

                    <div className="item">
                        <h4>"Practice makes progress, not perfect."</h4>
                        <br />
                    </div>
                    <div className="item">
                        <h4>"Don't think, just do."</h4>
                        <br />
                    </div>
                </div>

                <a
                    className="left carousel-control"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev">
                <span
                    className="glyphicon glyphicon-chevron-left"
                    aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>

                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  role="button"
                  data-slide="next">
                <span
                  className="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Quotes;