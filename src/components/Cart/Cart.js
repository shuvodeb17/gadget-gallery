import React from 'react';

const Cart = (props) => {
    const {cartOrder} = props;
    console.log(cartOrder);

    let initialValue = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cartOrder){
        initialValue+=product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((initialValue * 10 / 100).toFixed(2));
    const grandTotal = (initialValue+shipping+tax);
   
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${initialValue}</p>
            <p>Total Shipping: {shipping} </p>
            <p>Tax: ${tax} </p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;