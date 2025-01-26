import React from 'react';
import Logo from '../../images/Logo.svg'

const Header = () => {
    const navlinks = <>
        <a className='ms-8 hover:text-[#FF9900]' href='/'>Order Review</a>
        <a className='ms-8 hover:text-[#FF9900]' href='/'>Order</a>
        <a className='ms-8 hover:text-[#FF9900]' href='/'>Manage Order</a>
        <a className='ms-8 hover:text-[#FF9900]' href='/'>Login</a>
    </>
    return (
        <div className="navbar bg-[#1C2B35] text-white lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-xl"><img className='h-10' src={Logo} alt="" /></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
        </div>

    );
};

export default Header;