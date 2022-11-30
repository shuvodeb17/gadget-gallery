import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           <div className="container">
            <div className="child-header">
            <img src={logo} alt="" />
            <div className="list">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Order</a>
                <a href="">Service</a>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Header;