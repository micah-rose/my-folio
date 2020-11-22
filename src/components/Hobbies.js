import React from 'react';

const Hobbies = () => {
    return (
        <>
            <h2 id="hobbies">Hobbies/Interests</h2>
            <div className="hobbies">
                <u style={{textDecoration: "none", listStyleType: "none", fontSize: "25px"}}>
                    <li>Boxing</li>
                    <li>Weightlifting</li>
                    <li>Yoga</li>
                    <li>Art</li>
                    <li>Road Trips</li>
                    <li>Watching Live Music</li>
                    <li>Snowboarding</li>
                </u>
            </div>
        </>
    )
}

export default Hobbies;