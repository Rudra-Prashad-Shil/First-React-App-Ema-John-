import { ClipboardDocumentCheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';

const OrderSummary = () => {
    return (
        <div className='border-2 bg-[#FFE0B3] p-4'>
            <h4 className='text-center text-xl font-semibold text-black'>Order Summary</h4>
            <div className='py-12 px-2 text-black'>
                <p>Selected Items: </p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h5>Grand Total: $</h5>
            </div>
            <button className='mb-4 w-full bg-red-800 rounded-md py-3 text-white inline-flex justify-center'>Clear Cart<TrashIcon className='size-6'></TrashIcon></button>
            <button className='w-full bg-yellow-600 rounded-md py-3 text-white inline-flex justify-center'>Review Order<ClipboardDocumentCheckIcon className='size-6'></ClipboardDocumentCheckIcon></button>
        </div>
    );
};

export default OrderSummary;