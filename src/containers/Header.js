import React from 'react';
import Picture from '../components/Picture';
import Intro from '../components/Intro';
import HeaderMsg from '../components/HeaderMsg';
import Canvas from '../components/Canvas';

const Header = () => {
    return (
    <>
    <div className="header">
    {/* <header className="header"> */}
        <Canvas />
        <div className="container-fluid bg-1 text-center" id="header-content">
            <Picture />
            <div className="header-text">
                <HeaderMsg />
                <Intro />
            </div>
        </div>
    {/* </header> */}
    </div>
    </>
    )
}

export default Header;
