import React from 'react';
import Picture from '../components/Picture';
import Intro from '../components/Intro';
import HeaderMsg from '../components/HeaderMsg';
import Canvas from '../components/Canvas';

const Header = () => {
    return (
    <>
    <header className="header">
        <Canvas />
        <div className="container-fluid bg-1 text-center" id="header-content">
            <Picture />
            <div className="header-text">
                <HeaderMsg />
                <Intro />
            </div>
        </div>
    </header>
    </>
    )
}

export default Header;
