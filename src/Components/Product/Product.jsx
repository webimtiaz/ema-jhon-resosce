import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    
    const {id, name, seller,ratings, quantity, price, img}=props.product;
    const hendelaradded = props.hendelaradded



    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p>Price:$ {price}</p>
            <p>Manufacturing: {seller}</p>
            <p>Raiting: {ratings} star</p>
           </div>
           <button onClick={()=> hendelaradded(props.product)} className='btn-card'>
            Add to Card
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            
        </div>
    );
};

export default Product;