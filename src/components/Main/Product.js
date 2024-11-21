import React from 'react';
import {ShoppingCartIcon } from '@heroicons/react/24/solid'

const Product = ({item}) => {
    console.log(item);
    const {img,name,price,seller,ratings} = item;
    return (

        <div className="card card-compact w-full shadow-xl border-white">
            <figure>
                <img
                    className='w-11/12 rounded-md'
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2> 
                <h3>Price: ${price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
                
                <button className="btn btn-primary"><ShoppingCartIcon className='size-6'></ShoppingCartIcon>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;