import React, { useEffect, useState } from 'react';
import Product from './Product';
import OrderSummary from './OrderSummary';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

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
        <div className='grid grid-cols-12'>
            <div className='col-span-11 ml-5'>
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
            <div>
                <span onClick={() => setShowCart(!showCart)} className='fixed right-0'>{showCart ? <ArrowRightCircleIcon className='size-10 text-yellow-600' /> : <ArrowLeftCircleIcon className='size-10 text-yellow-600' />}</span>
                <div className={`fixed duration-500 ${showCart ? 'right-0':'-right-64'} top-32`}>
                    <OrderSummary cart={cart}></OrderSummary>
                </div>
            </div>
        </div>
    );
};

export default Shop;