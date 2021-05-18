import React from 'react'
import aboutimg from "../assets/organic-about-1.png"
function About() {
    return (
        <div className="about">
            <div className="about-img">
                <img src={aboutimg} alt="img"/>

            </div>
            <div className="about-text">
                <h3>Fresh food,<font>Simply</font><font>Delecious</font></h3>
                <a href="#" className="about-btn">Read More</a>

            </div>
            
        </div>
    )
}

export default About
