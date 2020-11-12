import React from 'react';

const Quotes = props => {
    return (
        <>
            <div
                id="myCarousel"
                className="carousel slide text-center"
                data-ride="carousel">

        {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

        {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner" role="listbox" >
                    <div className="item active">
                        <h4 style={{fontSize: "20px", marginBottom: "30px"}}>"Life moves when you do."</h4>
                        <br />
                    </div>

                    <div className="item">
                        <h4 style={{fontSize: "20px", marginBottom: "30px"}}>"Practice makes progress, not perfect."</h4>
                        <br />
                    </div>
                    <div className="item">
                        <h4 style={{fontSize: "20px", marginBottom: "30px"}}>"Don't think, just do."</h4>
                        <br />
                    </div>
                </div>


        {/* <!-- Left and right controls --> */}
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
                  class="right carousel-control"
                  href="#myCarousel"
                  role="button"
                  data-slide="next">
                <span
                  class="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Quotes;