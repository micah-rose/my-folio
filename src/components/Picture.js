import React from 'react';
import main from '../images/main.jpg';
import Info from './Info';

const Picture = props => {
    return (
        <>
        <div width="200" style={{float: "left", marginLeft: "80px"}}>
            <svg 
                width="350" 
                height="auto" 
                viewBox="0 0 100 100" 
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id="img" 
                patternUnits="userSpaceOnUse" 
                width="200" 
                height="200">
                <image 
                  href={main} 
                  x="-25" 
                  width="150" 
                  height="110" 
                  className="image" 
                  alt="Main"/>
              </pattern>
            </defs>
            <polygon 
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="url(#img)"/>
            </svg>
            <Info />
        </div>
        </>
    )
}

export default Picture;