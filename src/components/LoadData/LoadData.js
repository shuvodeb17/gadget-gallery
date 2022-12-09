import React, { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import DisplayData from '../DisplayData/DisplayData';
import './LoadData.css';

const LoadData = () => {
    // load data
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // add to cart button
    const addToCart = products => {
        if(cart.length>=4){
            const message = document.getElementById('pop-message');
            message.style.display = 'block';
        } else{
            const newCart = [...cart, products];
            setCart(newCart);
        }
    }


    return (
        <div className='load-data-wrapper'>
            <div className="container">
                <div className="load-data-child">
                    <div className="left">
                        <div className="left-text">
                            <h3>Shopping Cart</h3>
                            <h3>{products.length} items</h3>
                        </div>
                        <div className="left-data-load">
                        {
                            products.map(product => 
                            <DisplayData 
                                allProducts={product}
                                button={addToCart}
                            ></DisplayData>)
                        }
                        </div>
                    </div>
                    <div className="right">
                        <h3>Order Summary {cart.length}</h3>
                        {
                            cart.map(carts => <Cart allCarts={carts}></Cart>)
                        }
                    </div>
                </div>
            </div>


           <div id='pop-message' className="popup-message">
            <div className="container">
                <div className="message-text">
                    <h1>Opps</h1>
                    <h2>No added products</h2>
                </div>
            </div>
           </div>

        </div>
    );
};

export default LoadData;