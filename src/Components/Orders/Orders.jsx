import React, { useState } from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);
    const handlerRemoveCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='review-product'>
                    {
                        saveCart.map(product => <ReviewProducts
                        key={product.id}
                        product={product}
                        handlerRemoveCart ={handlerRemoveCart}
                        ></ReviewProducts>)
                    }
            </div>
            <div className='card-container'>
                <Card card={cart}></Card>
            </div>
        </div>
    );
};

export default Orders;