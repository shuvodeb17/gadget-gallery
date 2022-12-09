import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {picture, _id, name, quantity, price} = props.allCarts;
    return (
        <div className='cart-wrapper'>
            <div className="cart-child">
                <img src={picture} alt="" />
                    <div className="text">
                        <p>ID: {_id}</p>
                        <p>Name: {name}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Price: {price}</p>
                    </div>
            </div>
        </div>
    );
};

export default Cart;