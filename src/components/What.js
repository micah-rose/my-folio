import React from 'react';

const What = () => {
    return (
        <>
            <h3 className="about-h3">W H A T</h3>
            <br />
            <div className="about-content">
            <div className="what">
                <p>Diving head first into the tech world was both scary and exhilarating, but it has
                also been the most fun. There's this overwhelming sense of relief knowing that the career 
                choice you've made is one you genuinely enjoy and feel passionate about. 
                </p>
                <br />
                <p>Some of the skills I have gained over the years are:</p>
                <br />
                <p>This page displays some of the "whats" I've been working on and the goals I have set 
                for myself. I am excited to share these projects with you (I've chosen some of my recent 
                favorites) and I hope they properly showcase my abilties as a software engineer. 
                </p>
            </div>

            <div className="projects">
            <div class="row text-center">
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img src="paris.jpg" alt="Paris" />
                    <p><strong>Project 1</strong></p>
                    <p>Fri. 27 November 2015</p>
                    <button class="btn">Buy Tickets</button>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img src="newyork.jpg" alt="New York" />
                    <p><strong>Project 2</strong></p>
                    <p>Sat. 28 November 2015</p>
                    <button class="btn">Buy Tickets</button>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img src="sanfran.jpg" alt="San Francisco" />
                    <p><strong>Project 3</strong></p>
                    <p>Sun. 29 November 2015</p>
                    <button class="btn">Buy Tickets</button>
                  </div>
                </div>
            </div>
            </div>

            <br />
            <div className="course-buttons"> 
                <p>It's important to know where you're going, but it's just as important to 
                know where you came from. Below are the web development portfolios I built while 
                taking courses at the community college. Feel free to check them out!! Pretty 
                cool to see how far I've come. 
                </p>
               <a 
                className="btn btn-info" 
                href="https://micah-rose.github.io/rosegoldwebdesign/" 
                target="_blank" 
                rel="noreferrer">CSIS 1430</a>
               <a 
                className="btn btn-info" 
                href="https://goji-saurus.000webhostapp.com/" 
                target="_blank" 
                rel="noreferrer">CSIS 2440</a>
            </div>
            </div> 
        </>
    )
}

export default What;