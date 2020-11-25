import React from 'react';
import Who from '../components/Who';
import Why from '../components/Why';
import Where from '../components/Where';

const AboutMe = () => {
    return (
        <>
        <div className="about-me">
            <h2 style={{fontSize: "80px"}}>About Me</h2>
            <p style={{fontSize: "25px", width: "80%", margin: "auto"}}>
            Hello there!! I'm Micah and I am the junior software engineer who built this site. I am 
            excited you are here to learn more about the who, why, and where that make up
            all things me (the what is demonstrated on my Skills & Projects section). Let's get started!!
            </p>
            <hr />
            <Who />
            <Why />
            <Where />
        </div>
        </>
    )
}

export default AboutMe;