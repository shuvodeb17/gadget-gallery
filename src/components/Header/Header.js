import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="container">
                <div className="header-child">
                    <h3>Gadget Gallery</h3>
                    <div className="menu">
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">Contact</a>
                        <a href="">Services</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;