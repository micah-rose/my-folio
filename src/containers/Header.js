import React from 'react';
import main from '../images/main.jpg';

const Header = props => {
    return (
    <>
        <div className="container-fluid bg-1 text-center">
            <div className="image" style={{float: "left", marginLeft: "50px"}}>
                <img src={main} className="img-responsive img-circle margin" alt="Main" width="350" height="350" />
            </div>
  
            <div className="header-stuff" style={{display: "inline-block", marginTop: "100px"}}>
                <h3 className="margin" style={{fontSize: "200px"}}>WELCOME</h3>
                <h3>This is my portfolio!</h3>
            </div>
        </div>
    </>
    )
}

export default Header;
