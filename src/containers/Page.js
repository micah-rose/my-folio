import React from 'react';
import AboutMe from '../containers/AboutMe';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Page = () => {
    return (
        <>
            <div id="about" className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <AboutMe />
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