import React from 'react';
import './DisplayData.css';

const DisplayData = (props) => {
    // console.log(props.allProducts);
    const {picture, id, name, price} = props.allProducts;
    return (
        <div className='display-data-wrapper'>
            <div className="display-data">
                <img src={picture} alt="" />
                <div className="text">
                    <p>ID: {id}</p>
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayData;