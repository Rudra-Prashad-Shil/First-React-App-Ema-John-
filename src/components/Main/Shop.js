import React, { useEffect, useState } from 'react';
import Product from './Product';
import OrderSummary from './OrderSummary';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log('stored cart',storedCart);
        // step 1: get the id
        for (const id in storedCart) {
            // console.log('id in stored cart',id);
            // step 2: get the cart product from all products using ID
            const productAdded = products.find(product => product.id === id);
            if (productAdded) {
                // console.log('productAdded',productAdded);
                // step 3: get quantity of that product
                const quantity = storedCart[id];
                productAdded.quantity = quantity;
                savedCart.push(productAdded);
            }
            // console.log('Saved cart',savedCart);
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleShoppingCart = (product) => {
        //const newCart = [...cart, product];
        //option 3
        let newCart = [];
        const exists = cart.find(cartItem => cartItem.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity += 1;
            const remaining = cart.filter(cartItem => cartItem.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart)
        addToDb(product.id);
    }

    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 mx-5'>
                <h2 className='text-center text-sm font-semibold'>Total Available: {products.length}</h2>
                <h3 className='text-center text-3xl font-semibold text-yellow-600'>Available items</h3>
                <hr className='my-5 w-11/12 mx-auto'></hr>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-4'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            item={product}
                            handleCart={handleShoppingCart}
                        ></Product>)
                    }
                </div>
            </div>
            <OrderSummary cart={cart}></OrderSummary>
        </div>
    );
};

export default Shop;