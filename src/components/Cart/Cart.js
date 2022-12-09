import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.allCarts)
    const {picture, name, price} = props.allCarts;
    return (
        <div className='cart-wrapper'>
            <div className="cart-child">
                <img src={picture} alt="" />
                <div className="text">
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;