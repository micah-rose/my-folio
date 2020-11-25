import React from 'react';
import Hobbies from '../components/Hobbies';
import Story from '../components/Story';

const Who = () => {
    return (
        <>
            <a href="#who" data-toggle="collapse">
                <h3 style={{fontSize: "50px"}}>WHO</h3>
            </a>
            <div id="who" class="collapse">
            <Hobbies />
                <br />
                <Story />
                <br />
            </div>
            {/* Currently working as a Technical Developer, I have dedicated the last 3 years to gaining
            proficient level knowledge in full stack software and web development technologies. */}
        </>
    )
}

export default Who;