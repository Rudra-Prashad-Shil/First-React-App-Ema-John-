import React, { useEffect, useState } from 'react';
import Product from './Product';
import OrderSummary from './OrderSummary';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 mx-5'>
                <h2 className='text-center text-xl font-semibold'>Total Available: {products.length}</h2>
                <div className='grid md:grid-cols-2 gap-5 mt-4'>
                    {
                        products.map(product => <Product key={product.id} item={product}></Product>)
                    }
                </div>
            </div>
            <OrderSummary></OrderSummary>
        </div>
    );
};

export default Shop;