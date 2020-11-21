import React from 'react';
import Particles from 'react-particles-js';

const Canvas = props => {

    return (
        <Particles
            className="particles"
            height="350px"
            margin="0"
            params={{
                "particles": {
                    "color": 
                        {
                        "value": ["#5A2E3E", "#AEE0DC", "#C5AA74", "#C1A4D6", "#969494"]
                    },
                    "number": {
                        "value": 2000
                    },
                    "size": {
                        "value": 10,
                        "random": true,
	                    "anim": {
	                    "speed": 15,
	                    "size_min": 1
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