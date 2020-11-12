import React from 'react';
import main from '../images/main.jpg';

const Picture = props => {
    return (
        <>
            <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25%">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="200" height="200">
                <image 
                  href={main} 
                  x="-25" 
                  width="150" 
                  height="110" 
                  className="image" 
                  alt="Main"
                  style={{
                      float: "left",
                  }}/>
              </pattern>
            </defs>
            <polygon 
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="url(#img)"/>
            </svg>
        </>
    )
}

//<!-- "https://api.github.com/users/micah-rose/avatar_url" -->

export default Picture;