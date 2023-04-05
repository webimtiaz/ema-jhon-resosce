import React from 'react';
import './Card.css';

const Card = (props) => {
    const {card}=props;

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of card){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='card'>
             <h4>products</h4>
                <p>selted items :{quantity}</p>
                <p>Total Price:${totalPrice}</p>
                <p>Total Shopping:${totalShipping}</p>
                <p>Tax:${tax}</p>
                <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Card;