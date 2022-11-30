import React from 'react';

const Cart = (props) => {
    const {cartOrder} = props;
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items: {cartOrder.length}</p>
        </div>
    );
};

export default Cart;