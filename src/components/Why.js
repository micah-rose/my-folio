import React from 'react';
import pika from '../images/pika.jpg';

const Why = () => {
    return (
        <>
        <h3 className="about-h3">W H Y</h3>
        <br />
        <div className="about-content">
        <img className="img-right"
            src={pika}
            alt="Pika" />
            <br />
            <p>So why tech? Well, like so many of us, I had a moment where I realized there wasn't a role within my department
            that I was inspired to obtain. I felt stuck and began to feel like I could be making a difference elsewhere. That's 
            when I discovered code and developing software. Suddenly, there was no ceiling or limitations to how much of an impact 
            I could make. The possibilities were truly endless and for the the first time in a long while I had that gut feeling
            of "yes, this is right". My journey in tech began that spring of 2017 and I never
            looked back.</p>
            <br /> 
            <p className="fun-fact">Fun Fact: the first step on my tech journey was ending a 6 year haitus by re-enrolling at the 
            local community college.</p>
        </div>
        </>
    )
}

export default Why;