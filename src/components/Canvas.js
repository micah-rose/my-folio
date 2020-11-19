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
                        "value": ["#8C3333", "#AEE0DC", "#C5AA74", "#c1a4d6", "#969494"]
                    },
                    "number": {
                        "value": 7500
                    },
                    "size": {
                        "value": 10,
                        "random": true,
	                    "anim": {
	                    "speed": 10,
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