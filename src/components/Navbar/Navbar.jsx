import React from 'react';
import "./Navbar.scss";
import Search from "../../assets/Search.png"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>

                <div className='searchbar'>
                    <img src={Search} alt='' />
                    <input />
                </div>
                <div>Categories</div>
                <div>Website Builders</div>
                <div>Today's Deals</div>

            </div>
        </div>
    )
}

export default Navbar;