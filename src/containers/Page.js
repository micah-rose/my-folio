import React from 'react';
import Intro from '../components/Intro';
import Hobbies from '../components/Hobbies';
import Story from '../components/Story';

const Page = props => {
    return (
        <>

<div id="about" className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
            <Intro />
            <Hobbies />
            <Story />
          <h2>Skills & Projects</h2>
          <p className="skills">
            Skills & Projects content
          </p>
          <br />
          <h2>Contact Me</h2>
          <p className="contact-me">
            Contact Me content
          </p>
        </div>
      </div>
      </div>

        </>
    )
}

export default Page;