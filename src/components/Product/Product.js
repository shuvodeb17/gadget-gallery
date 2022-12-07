import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DisplayData from '../DisplayData/DisplayData';
import Offer from '../Offer/Offer';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);
    const [offer, setOffer] = useState({});
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if(carts.length > 0){
            setCheck(true);
        }else{
            setCheck(false);
        }
    }, [carts])
    
    useEffect( () => {
        fetch('loadData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addCartBtn = (selectedCart) => {
        let newCart = [];
        const exists = carts.find(product => product.id == selectedCart.id);
        if(!exists){
            selectedCart.quantity = 1;
            newCart = [...carts, selectedCart];
        }else{
            const rest = carts.filter(product => product.id != selectedCart.id);
            selectedCart.quantity = selectedCart.quantity + 1;
            newCart = [...rest, selectedCart];
        }
        setCart(newCart);
    }

    const deleteBtn = () => {
        setCart([]);
    }


    // random products genarate
    const getOffer = () => {
        const ran = parseInt(Math.random() * products.length + 1);
        const items = products[ran];
        setOffer(items)
    }


    return (
        <div className='product'>
            <div className="container">
                <div className="product-child">
                    <div className="left">
                        {
                            products.map(product => <DisplayData 
                                loadProducts={product}
                                key={product.id}
                                addBtn={addCartBtn}
                            ></DisplayData>)
                        }
                    </div>
                    <div className="right">
                        <div className="right-child">
                            <h4 className='order-summary'>Order Summary: {carts.length}</h4>
                            <button onClick={deleteBtn} className='delete-btn'>Delete</button>
                        </div>
                        {
                            carts.map(cart => 
                            <Cart 
                                cartLoad={cart}
                                cartProducts={products}
                                key={cart.id}
                            ></Cart>)
                        }

                        <button className={check?'offer-btn':'offer-btn-disebled'} disabled={!check} onClick={()=>getOffer(products)}>Buy One Get One Free</button>
                        <Offer allOffers={offer}></Offer>
                        
                        {
                            Object.keys(offer).length > 0 &&(
                            <div className='offer'>
                                <img className='offer-img' src={offer.pairImage} alt="" />
                                <div className="offer-text">
                                    <p>Name: {offer.name}</p>
                                    <p>Price: {offer.price}</p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;