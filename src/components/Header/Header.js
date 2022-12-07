import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header-child">
                    <h1>Heels Vila</h1>
                    <div className="list">
                        <a href="">Home</a>
                        <a href="">Services</a>
                        <a href="">Order</a>
                        <a href="">Settings</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;