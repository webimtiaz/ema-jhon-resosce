import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewProducts.css'

const ReviewProducts = ({product , handlerRemoveCart}) => {
    const {id, img, name, quantity, price}= product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-deitils'>
                <p className='review-titel'>{name}</p>
                <p>Price: <span className='orange-text'>{price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
                <button onClick={() => handlerRemoveCart(id)} className='btn-dlt'> <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt} /></button>   
            </div>
    );
};

export default ReviewProducts;