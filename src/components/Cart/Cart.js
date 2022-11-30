import React from 'react';

const Cart = (props) => {
    const {cartOrder} = props;
    console.log(cartOrder);

    let initialValue = 0;
    let shipping = 0;
    let grandTotal = 0;
    for(const product of cartOrder){
        initialValue+=product.price;
        shipping = shipping + product.shipping;
        grandTotal = initialValue+shipping;
    }
    const tax = (initialValue * 10 / 100).toFixed(2);

   
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items: {cartOrder.length}</p>
            <p>Total Price: ${initialValue}</p>
            <p>Total Shipping: {shipping} </p>
            <p>Tax: ${tax} </p>
            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default Cart;