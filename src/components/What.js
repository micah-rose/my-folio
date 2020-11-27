import React from 'react';
import Modal from '../components/Modal';

const What = () => {
    return (
        <>
            <h3 className="about-h3">W H A T</h3>
            <br />
            <div className="about-content">
            <div className="what">
                <p>Diving head first into the tech world was both scary and exhilarating for me, but it has
                also been the most fun. There's this overwhelming sense of relief knowing that the career 
                choice you've made is one you genuinely enjoy and feel passionate about. Since completeing
                my Associate's degree I have continued my education through online tutorials and 
                certifications to strengthen my skill set.
                </p>
                <br />
                <h3 style={{fontWeight: "bold"}}>Some of the skills I have gained over the past 3 years are:</h3>
                <u style={{
                        textDecoration: "none", 
                        listStyleType: "none", 
                        fontSize: "23px"}}
                >
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML & CSS</li>
                        <li>Java</li>
                        <li>PHP</li>
                        <li>Microsoft SQL Server</li>
                </u>
                <br />
                <h3 style={{fontWeight: "bold"}}>The skills I am currently working on/aspire to obtain:</h3>
                <u style={{
                        textDecoration: "none", 
                        listStyleType: "none", 
                        fontSize: "23px"}}
                >
                        <li>Node</li>
                        <li>MERN Stack</li>
                        <li>Linux Administration</li>
                        <li>DevOps Processes</li>
                        <li>Python</li>
                </u>
                <br />
                <p>I still have a lot to learn, but I am determined to be a knowledgeable engineer and have made 
                it a goal to commit code regularly. This page displays some of the "whats" I've been working on 
                and I am excited to share these projects with you. I hope they properly showcase my abilties as a 
                software engineer. As I grow within my craft, so will the content on this page. Afterall... practice 
                doesn't make perfect, but practice does make PROGRESS.
                </p>
            </div>
            <br />
            <div className="projects">
            <div class="row text-center">
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img src="paris.jpg" alt="Paris" />
                    <p><strong>Project 1</strong></p>
                    <p>Fri. 27 November 2015</p>
                    <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
                  </div>
                </div>
                <Modal />
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
            <br />
            <p className="fun-fact">Fun Fact: in the 3rd grade I accidentally split a kid's head open with my face.</p>
            </div> 
        </>
    )
}

export default What;