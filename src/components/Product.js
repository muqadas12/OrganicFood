import React from 'react'
import Box from "../components/Product-Box/Box"
import img1 from "../assets/organic-pro-1.jpg"
import img2 from "../assets/organic-pro-2.jpg"
import img3 from "../assets/organic-pro-3.jpg"
import img4 from "../assets/organic-pro-4.jpg"
import img5 from "../assets/organic-pro-5.jpg"
import img6 from "../assets/organic-pro-6.jpg"

function Product() {
    return (
        <div className="product">
            <div className="p-heading">
                <h3>New organic Product</h3>

            </div>
            <div className="product-container">
                <Box img={img1} name="watermelon" price="$23.3"/>
                <Box img={img2} name="Mango" price="$29.3"/>
                <Box img={img3} name="Spanish" price="$33.3"/>
                <Box img={img4} name="Apple" price="$13.3"/>
                <Box img={img5} name="Grapes" price="$43.3"/>
                <Box img={img6} name="Lemon" price="$26.3"/>


            </div>
            
        </div>
    )
}

export default Product
