import React from 'react';
import Intro from '../components/Intro';
import Hobbies from '../components/Hobbies';
import Story from '../components/Story';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Page = () => {
    return (
        <>
            <div id="about" className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <Intro />
                        <br />
                        <div className="hobby-story">
                            <hr />
                            <Hobbies />
                            <br />
                            <Story />
                            <br />
                            <hr />
                        </div>
                        <Skills />
                        <br />
                        <div className="contact">
                            <hr />
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;