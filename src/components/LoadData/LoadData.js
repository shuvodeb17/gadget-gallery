import React, { useState } from 'react';
import { useEffect } from 'react';
import DisplayData from '../DisplayData/DisplayData';
import './LoadData.css';

const LoadData = () => {
    // load data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


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
                            ></DisplayData>)
                        }
                        </div>
                    </div>
                    <div className="right">
                        <h3>Order Summary</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadData;