import React from 'react';
import './DisplayData.css';

const DisplayData = (props) => {
    // console.log(props);
    const {button, allProducts} = props;
    const {picture, _id, name, price} = props.allProducts;
    return (
        <div className='display-data-wrapper'>
            <div className="display-data">
                <img src={picture} alt="" />
                <div className="text">
                    <p>ID: {_id}</p>
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                    <button onClick={() => button(allProducts)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayData;