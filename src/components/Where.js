import React from 'react';
import title from '../images/title.jpg';

const Where = () => {
    return (
        <>
            <h3 className="about-h3">W H E R E</h3>
            <br />
            <div className="about-content">
            <img style={{
                width: "240px",
                height: "auto",
                float: "left",
                margin: "auto",
                paddingRight: "10px"
            }}
            src={title}
            alt="Title" />
            <p>The last 3 years I have been dedicated to gaining proficient level knowledge in full stack technologies and finding 
            my place among the Silicon Slopes. My strong suit is JavaScript and front end developement, but where I'd really like to 
            end up is to be a well rounded engineer and use what I have learned (and will continue to learn) to pay it forward and help 
            others to succeed in tech. As someone who has made the jump from one career path to another and starting from square one as 
            a developer, I believe the resources for learning to code should be accessible to anyone who is willing to dive in and make 
            that change in their life.
            </p>
            <br />
            <p className="fun-fact">Fun Fact: I have a love/hate relationship with Java.</p>
        </div>
        </>
    )
}

export default Where;