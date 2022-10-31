import React from "react";
import image from '../../assets/images/Me.png';

function About() {
    return (
        <div>
            <div>
            <h1>About Me</h1>
            </div>
            <div id="background">
            <div id="about">
            <img id="image" src={image} alt="Ema Halimi" />
            <p id="about-me">
                I am a full time student at North American University majoring in Software 
                Engineering and Networking, with a background in HTML, CSS, JavaScript, Express, Node, React, PHP, MySQL, MongoDB, and Git. 
                I am currently attending the Rice University Coding Bootcamp and looking forward to 
                working as a full-stack web developer in the near future. 
            </p>
            </div>
            </div>
        </div>
    );
}

export default About;