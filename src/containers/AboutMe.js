import React from 'react';
import Hobbies from '../components/Hobbies';
import Story from '../components/Story';

const AboutMe = () => {
    return (
        <>
            <h2>About Me</h2>
            <div className="hobby-story">
                <Hobbies />
                <br />
                <Story />
                <br />
                <hr />
            </div>
        </>
    )
}

export default AboutMe;