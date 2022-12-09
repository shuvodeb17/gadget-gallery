import React, { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import DisplayData from '../DisplayData/DisplayData';
import Offer from '../Offer/Offer';
import './LoadData.css';

const LoadData = () => {
    // load data
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [offer, setOffer] = useState(false);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    // offer btn
    const offerBtn = () => {
        const ran = parseInt(Math.random() * cart.length);
        const newRan = cart[ran];
        setOffer(newRan);
        console.log(newRan);
    }
    useEffect(() => {
        if(cart.length>0){
            setOffer(true);
        }else{
            setOffer(false);
        }
    }, [cart])

    // add to cart button
    const addToCart = products => {
        if(cart.length>=4){
            const message = document.getElementById('pop-message');
            const okBtn = document.getElementById('ok-btn');
            message.style.display = 'block';
            okBtn.addEventListener('click', () => {
                message.style.display = 'none';
            })
        } else{
            let addCart = [];
            const check = cart.find(product => product._id == products._id);
            if(!check){
                products.quantity = 1;
                addCart = [...cart, products];
                setCart(addCart);
            }else{
                const rest = cart.filter(product => product._id != products._id);
                products.quantity = products.quantity + 1;
                addCart = [...rest, products];
                setCart(addCart);
       }
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
                            cart.map(carts => 
                            <Cart 
                                allCarts={carts}
                            ></Cart>)
                        }

                        {/* lottery option */}
                        <button onClick={offerBtn} disabled={!offer} className={offer ? 'offer-btn' : 'offer-btn-disabled'}>Offer</button>
                        {
                            <Offer
                                lottery={offer}
                            ></Offer>
                        }
                    </div>
                </div>
            </div>


           <div id='pop-message' className="popup-message">
            <div className="container">
                <div className="message-text">
                    <h1>Opps</h1>
                    <h2>Maximum 4 products add in cart</h2>
                    <button id='ok-btn'>Ok</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default LoadData;