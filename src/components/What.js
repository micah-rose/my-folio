import React from 'react';
import Modal from '../components/Modal';
import Modal2 from '../components/Modal2';
import Modal3 from '../components/Modal3';
import tetris  from '../images/tetris-icon.jpg';
import star from '../images/star-icon.png';
import weather from '../images/weather-icon.png';

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
                <h3 style={{fontWeight: "bold", color: "#5A2E3E", fontSize: "30px"}}>Some of the skills I have gained over the past 3 years are:</h3>
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
                <h3 style={{fontWeight: "bold", color: "#5A2E3E", fontSize: "30px"}}>The skills I am currently working on/aspire to obtain:</h3>
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
                software engineer. However, as I grow within my craft, so will the content on this page. It is my
                ambition to take what I've learned from these smaller projects and advance to developing full 
                production applications. Afterall... practice doesn't make perfect, but practice does make PROGRESS.
                </p>
            </div>
            <br />
            <div className="projects">
            <div class="row text-center">
                {/* <div class="col-sm-4">
                  <div class="thumbnail">
                    <img style={{width: "170px"}} src={burger} alt="Burger" />
                    <p><strong>Burger Builder</strong></p>
                    <button class="btn" data-toggle="modal" data-target="#myModal">Project Details</button>
                    <a 
                        className="btn" 
                        href="https://github.com/micah-rose/burger-builder-rematch" 
                        target="_blank" 
                        rel="noreferrer">Visit Project</a>
                  </div>
                </div> */}
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img style={{width: "170px"}} src={star} alt="Star" />
                    <p><strong>Star Match</strong></p>
                    <button class="btn" data-toggle="modal" data-target="#myModal">Project Details</button>
                    <a 
                        className="btn" 
                        href="https://micah-rose.github.io/star-match/" 
                        target="_blank" 
                        rel="noreferrer">Visit Project</a>
                  </div>
                </div>
                <Modal />
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img style={{padding: "22px"}} src={tetris} alt="Tetris" />
                    <p><strong>React Tetris</strong></p>
                    <button class="btn" data-toggle="modal" data-target="#myModalTwo">Project Details</button>
                    <a 
                        className="btn" 
                        href="https://micah-rose.github.io/react-tetris/" 
                        target="_blank" 
                        rel="noreferrer">Visit Project</a>
                  </div>
                </div>
                <Modal2 />
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img style={{width: "113px"}} src={weather} alt="Weather" />
                    <p><strong>Weather App</strong></p>
                    <h1 style={{color: "red"}}><strong>UNDER CONSTRUCTION</strong></h1>
                    <button class="btn" data-toggle="modal" data-target="#myModalThree">Project Details</button>
                    <a 
                        className="btn" 
                        href="https://micah-rose.github.io/js-weather-app/" 
                        target="_blank" 
                        rel="noreferrer">Visit Project</a>
                  </div>
                </div>
                <Modal3 />
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