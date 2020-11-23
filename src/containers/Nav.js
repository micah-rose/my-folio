import React from 'react';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container">                    
                <div class="navbar-header navbar-left">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </button>
                    </div>
                <a class="navbar-brand" href="#">MY FOLIO</a>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#intro">INTRO</a></li>
                            <li><a href="#hobbies">HOBBIES/INTERESTS</a></li>
                            <li><a href="#my-story">MY STORY</a></li>
                            <li><a href="#skills">SKILLS & PROJECTS</a></li>
                            <li><a href="#contact-me">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;