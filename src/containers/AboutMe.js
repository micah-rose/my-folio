import React from 'react';
import Who from '../components/Who';
import Why from '../components/Why';
import Where from '../components/Where';

const AboutMe = () => {
    return (
        <>
        <div className="about-me">
            <h2 style={{fontSize: "80px"}}>About Me</h2>
            <hr />
            <Who />
            <br />
            <Why />
            <br />
            <Where />
        </div>
        </>
    )
}

export default AboutMe;