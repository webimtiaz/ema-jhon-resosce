import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data));
    },[])

    const hendelaradded = (product) =>{
       const newcard = [...card, product];
       setCard(newcard);
       addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                    {
                        products.map( product => <Product
                        key={product.id}
                        product = {product}
                        hendelaradded ={hendelaradded}
                        ></Product>)
                    }
            </div>
            <div className='card-container'>
               <Card card={card}></Card>
            </div>

            
        </div>
    );
};

export default Shop;