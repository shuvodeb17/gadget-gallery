import React from 'react';
import './Offer.css';

const Offer = (props) => {
    console.log(props.lottery)
    const {picture, _id, name, price} = props.lottery;
    return (
        <div className="offer-wrapper">
            {
            Object.keys(props.lottery).length>0 && <div className='offer'>
                <img src={picture} alt="" />
                <div className="offer-text">
                    <p>ID: {_id}</p>
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
            }
        </div>
        
    );
};

export default Offer;