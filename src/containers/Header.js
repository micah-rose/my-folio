import React from 'react';
import Picture from '../components/Picture';
import Quotes from '../components/Quotes';
import HeaderMsg from '../components/HeaderMsg';

const Header = props => {
    return (
    <>
        <div className="container-fluid bg-1 text-center">
            <Picture />
            <div className="header-stuff" style={{display: "inline-block"}}>
                <HeaderMsg />
                <Quotes />
            </div>
        </div>
    </>
    )
}

export default Header;
