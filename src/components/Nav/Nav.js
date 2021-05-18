import React from 'react'

function Nav() {
    return (
        <div>
        <div className="logo">
            <a href="#">ECommerce</a>
            </div>
            <div classname="side-box">
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search food"/>

                </div>

            </div>
        </div>
    )
}

export default Nav
