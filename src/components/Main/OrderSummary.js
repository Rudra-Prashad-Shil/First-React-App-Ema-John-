import { ClipboardDocumentCheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';

const OrderSummary = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        //option 1
        // if(product.quantity === 0){
        //     product.quantity=1;
        // }

        //option 2
        // product.quantity = product.quantity || 1;

        // option 3: commented in shop.jsx
        total = total + product.price*product.quantity;
        shipping += product.shipping*product.quantity;
        quantity += product.quantity;
    }
    const tax = total * 7/100; //assuming 7% tax
    const grandTotal = total + shipping + tax;

    return (
        <div className='border-2 bg-[#FFE0B3] p-4 fixed right-0'>
            <h4 className='text-center text-xl font-semibold text-black'>Order Summary</h4>
            <div className='py-12 px-2 text-black'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            </div>
            <a href='/' onClick={deleteShoppingCart} className='mb-4 w-full bg-red-800 rounded-md py-3 text-white inline-flex justify-center'>Clear Cart<TrashIcon className='size-6'></TrashIcon></a>
            <button className='w-full bg-yellow-600 rounded-md py-3 text-white inline-flex justify-center'>Review Order<ClipboardDocumentCheckIcon className='size-6'></ClipboardDocumentCheckIcon></button>
        </div>
    );
};

export default OrderSummary;