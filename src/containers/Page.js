import React from 'react';
import Intro from '../components/Intro';
import Hobbies from '../components/Hobbies';
import Story from '../components/Story';
import Skills from '../components/Skills';

const Page = props => {
    return (
        <>

<div id="about" className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
            <Intro />
            <br />
            <hr />
            <Hobbies />
            <br />
            <Story />
            <br />
            <hr />
            <Skills />
            <br />
            <hr />
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