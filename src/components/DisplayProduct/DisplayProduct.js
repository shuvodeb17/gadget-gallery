import React from 'react';
import './DisplayProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
  
const DisplayProduct = (props) => {
    const {cartBtn,shop} = props;
    const {img, name, price , seller , ratings} =  props.shop;    

    return (
        <div className='display-product'>
            <img src={img} alt="" />
           <div className="text">
           <p className='name'>{name}</p>
            <p className='price'>Price: ${price}</p>
            <p className='manu'>Manufacturer: ${seller}</p>
            <p className='rating'>Rating: ${ratings}</p>
           </div>
           <button onClick={() => cartBtn(shop)} className="add-btn">Add to Cart
           <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        </div>
    );
};

export default DisplayProduct;