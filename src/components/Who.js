import React from 'react';
import about from '../images/about.jpg';

const Who = () => {
    return (
        <>
            <h3 className="about-h3">W H O</h3>
            <br />

            <div className="about-content">
            <img className="img-left"
            src={about}
            alt="About" />
            <p>Hello there!! My name is Micah and I am the junior software engineer who built this site. I am mama to a beautiful 
            little boy and two rambunctious dogs. Born and raised in Utah I am your typical lover of coffee and spending time in the 
            great outdoors, but I am far from "basic". My favorite things to do aside from writing rad software are boxing, snowboarding, 
            weightlifting, taking road trips, and jamming out to some music (especially the kind you can headbang to). I am 
            a <b>HUGE</b> fan of all things Godzilla, dinosaurs, dragons, and Japanese cartoons/graphic novels. I also love me some 
            good old school Nintendo.
            </p>
            <br />
            <p className="fun-fact">Fun Fact: I attended a boxing class on my due date, then had my son almost 24 hours later.</p>
            </div>
        </>
    )
}

export default Who;