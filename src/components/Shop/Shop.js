import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCartBtn = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className="container">
                <div className="shop-child">
                    <div className="left">
                        {/* <h1>Shop {products.length}</h1> */}
                        {
                            products.map(product => <DisplayProduct 
                                shop={product}
                                key={product.id}
                                cartBtn={addToCartBtn}
                            ></DisplayProduct>)
                        }
                    </div>
                    <div className="right">
                        <Cart cartOrder={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;