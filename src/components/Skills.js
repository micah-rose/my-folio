import React from 'react';
import js from '../images/js-logo.png';
import css from '../images/css-logo.png';
import html from '../images/html-logo.png';


const Skills = () => {
    return (
        <>
            <div className="container">
                <h2 id="skills">Skills & Projects</h2>
                <div className="skills">
                <u style={{
                        textDecoration: "none", 
                        listStyleType: "none", 
                        fontSize: "25px"}}
                    >
                        <li>JavaScript (<em>2+ years</em>)</li>
                        <li>HTML/CSS (<em>2+ years</em>)</li>
                        <li>ReactJS (<em>up to 1 year</em>)</li>
                        <li>NodeJS (<em>in progress</em>)</li>
                        <li>Java (<em>up to 1 year</em>)</li>
                        <li>PHP (<em>less than 1 year</em>)</li>
                        <li>Microsoft SQL Server (<em>3+ years</em>)</li>
                        <li>MERN Stack (<em>in progress</em>)</li>
                        <li>DevOps (<em>in progress</em>)</li>
                    </u>
                </div>
                <br />
                <h1 style={{fontWeight: "bold"}}>My Computer Science Projects</h1>
                <br />
                <p style={{fontSize:"20px", marginBottom: "15px"}}>Click the below icons to display a list of courseworks for each section.</p>
                    <div class="row">
                        <div class="col-sm-4">
                          <a href="#demo" data-toggle="collapse">
                            <img src={html}  alt="HTML" width="200" height="200" />
                          </a>
                          <div id="demo" class="collapse">
                            <ul style={{
                        textDecoration: "none", 
                        listStyleType: "none"}}>
                            <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/tables/">YouTube Video Page</a></li>
                            <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/image-map/">Image Map</a></li>
                            <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/bootstrap-1/">Simply Me (Bootstrap)</a></li>
                            <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/bootstrap-2/">Band (Bootstrap)</a></li>
                          </ul>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <a href="#demo2" data-toggle="collapse">
                            <img src={css} alt="CSS" width="200" height="200" />
                          </a>
                          <div id="demo2" class="collapse">
                            <ul style={{
                        textDecoration: "none", 
                        listStyleType: "none"}}>
                              <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/little-boxes/">Little Boxes</a></li>
                              <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/pizza-2/">Pizza Parlor</a></li>
                              <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/1430-midterm/">Eurypterids Midterm</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-sm-4">
                            <a href="#demo3" data-toggle="collapse">
                              <img src={js} alt="JavaScript" width="160" height="210" />
                            </a>
                            <div id="demo3" class="collapse">
                              <ul style={{
                        textDecoration: "none", 
                        listStyleType: "none"}}>
                                <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/js-birthday/">Happy Birthday</a></li>
                                <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/mad-lib/">Mad Libs</a></li>
                                <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/lottery/">Lottery</a></li>
                                <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/guess/">Guessing Game</a></li>
                                <li><a target="_blank" href="https://micah-rose.github.io/rosegoldwebdesign/tic-tac-toe/">Tic Tac Toe</a></li>
                              </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default Skills;