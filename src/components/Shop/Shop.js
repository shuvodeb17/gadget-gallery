import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, [])

    useEffect( () => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products])

    const addToCartBtn = (selectedProducts) => {
        const exists = cart.find(product => product.id === selectedProducts);
        let newCart = [];
        if(!exists){
            selectedProducts.quantity = 1;
            newCart = [...cart, selectedProducts];
        }else{
            const rest = cart.filter(product => product.id !==selectedProducts.id);
            selectedProducts.quantity = selectedProducts.quantity + 1;
            newCart = [...rest, selectedProducts];       
        }
        setCart(newCart);
        addToDb(selectedProducts.id);
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