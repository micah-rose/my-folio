import React from 'react';
import Particles from 'react-particles-js';

// import Picture from '../components/Picture';
// import Intro from '../components/Intro';
// import HeaderMsg from '../components/HeaderMsg';

const Canvas = props => {

    return (
        <Particles
            className="particles"
            height="100%"
            margin="0"
            params={{
                "particles": {
                    "color": 
                        {
                        "value": ["#5A2E3E", "#AEE0DC", "#C5AA74", "#C1A4D6", "#969494"]
                    },
                    "number": {
                        "value": 250
                    },
                    "size": {
                        "value": 20,
                        "random": true,
	                    "anim": {
	                    "speed": 5,
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
                            "enable": false,
                            "mode": "repulse"
                        }
                    }
                }
             }} 
         />
    )
}

export default Canvas;