import React from 'react'
import Nav from './Nav/Nav'
 import image from "../assets/organic-pattern-1.png"
function Header() {
    return (
        <div className="main">
            <Nav/>
            <div className="m-text">
                <img src={image} alt="img" className="header-image"/>
                <h2>Eat <font>Clean</font>and<font>Green</font>.Eat Organic</h2>
                <a href="#" className="m-btn">Products</a>

            </div>
        </div>
    )
}

export default Header
