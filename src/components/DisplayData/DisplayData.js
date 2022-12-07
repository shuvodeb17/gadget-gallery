import React from 'react';
import './DisplayData.css';

const DisplayData = (props) => {
    const {pairImage, name, price} = props.loadProducts;
    const {addBtn, loadProducts} = props;
    return (
        <div className='display-data'>
            <img src={pairImage} alt="" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button onClick={() => addBtn(loadProducts)}>Add to Cart</button>
        </div>
    );
};

export default DisplayData;