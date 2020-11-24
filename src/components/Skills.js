import React from 'react';

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
            </div>
        </>
    )
}

export default Skills;