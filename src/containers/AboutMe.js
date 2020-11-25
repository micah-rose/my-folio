import React from 'react';
import Hobbies from '../components/Hobbies';
import Story from '../components/Story';

const AboutMe = () => {
    return (
        <>
        <div className="hobby-story">
            <h2>About Me</h2>
                <Hobbies />
                <br />
                <Story />
                <br />
        </div>
        </>
    )
}

export default AboutMe;