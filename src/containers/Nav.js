import React from 'react';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" href="#">My Folio</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">INTRO</a></li>
                            <li><a href="#">HOBBIES/INTERESTS</a></li>
                            <li><a href="#">MY STORY</a></li>
                            <li><a href="#">SKILLS & PROJECTS</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;