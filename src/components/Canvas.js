import React from 'react';
import Particles from 'react-particles-js';

const Canvas = props => {

    return (
        <Particles
            className="particles"
            height="500px"
            margin="0"
            params={{
                "particles": {
                    "color": 
                        {
                        "value": "#28a678"
                    },
                    "number": {
                        "value": 2000
                    },
                    "size": {
                        "value": 10,
                        "random": true,
	                    "anim": {
	                    "speed": 50,
	                    "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
             }} 
         />
    )
}

export default Canvas;