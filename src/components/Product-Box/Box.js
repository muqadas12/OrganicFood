import React from 'react'
function Box(props) {
    return (
        <div className="p-box">
            <img src={props.img} alt="img"/>
            <p>{props.name}</p>
            <a href="#" className="price">{props.price}</a>
            <a href="#" className="buy-btn">Add to cart</a>

            
        </div>
    )
}

export default Box
