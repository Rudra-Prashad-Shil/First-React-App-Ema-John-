import React from 'react';
import Logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='h-20 px-20 bg-[#1C2B35] flex justify-between items-center'>
            <img className='h-10' src={Logo} alt="" />
            <div className='text-white gap-4'>
                <a className='ms-8 hover:text-[#FF9900]' href='/Order-Review'>Order Review</a>
                <a className='ms-8 hover:text-[#FF9900]' href='/Order'>Order</a>
                <a className='ms-8 hover:text-[#FF9900]' href='/Manage-Order'>Manage Order</a>
                <a className='ms-8 hover:text-[#FF9900]' href='/Login'>Login</a>
            </div>
        </nav>
    );
};

export default Header;