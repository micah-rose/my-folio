import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container">                    
                <div className="navbar-header">
                        <button type="button" 
                            className="navbar-toggle" 
                            data-toggle="collapse" 
                            data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    <Link className="navbar-brand" to="/">MY FOLIO</Link>
                </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/about">ABOUT ME </Link></li>
                            <li><Link to="/skills">SKILLS & PROJECTS</Link></li>
                            <li><Link to="/contact-me">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;