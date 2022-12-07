import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {pairImage,name,price,quantity} = props.cartLoad;



    return (
        <div className='cart-main'>
            <div className="cart">
            <img src={pairImage} alt="" />
                <div className="text">
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
           </div>
        </div>
    );
};

export default Cart;