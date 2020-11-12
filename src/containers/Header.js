import React from 'react';
import Picture from '../components/Picture';

const Header = props => {
    return (
    <>
        <div className="container-fluid bg-1 text-center">
            <Picture />
            <div className="header-stuff" style={{display: "inline-block", marginTop: "100px"}}>
                <h3 className="margin" style={{fontSize: "200px"}}>WELCOME</h3>
                <h3>This is my portfolio!</h3>
            </div>
        </div>
    </>
    )
}

export default Header;
