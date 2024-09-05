"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ReactWhatsapp from 'react-whatsapp';
import MobileNav from './MobileNav';
const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const [userOption, setUserOption] = useState(false);
    const response = async () => {
        const res = await axios.get('https://api.alhudaflorist.com/')
        return res
    }

    return (
        <nav className="mx-auto bg-[white] flex flex-col relative z-[55] justify-between items-center">
            <div className="relative justify-between px-4 py-4 flex flex-row items-center w-full">

                <Link href="/" className="text-black text-xl inline-flex font-bold p-0 m-0 items-center">
                    <img src="/assets/brand.png" className="" alt="The Farmer's Market" />
                    {/* <p className="text-2xl font-sans">
                        <span className=' uppercase text-[#0c5b47]'>huda</span>
                        <span className=' uppercase text-[#18181F]'>florist</span>
                    </p> */}
                </Link>

                <div className="main-nav hidden px-10 lg:flex justify-center z-[55] bg-transparent py-3 w-full">
                    <nav className="md:gap-6 space-x-6">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="#">Flowers</NavLink>
                        <NavLink to="#">Services</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                </div>

                <div className="flex flex-row items-center gap-0 md:gap-4">
                    <div className="w-full justify-between flex flex-row gap-4 items-center">
                        <Link href="/cart" className="text-[#FAFAD2] text-xl relative flex gap-8 items-center hover:text-[#EBBC5E] transition duration-300">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        <span className='text-[#FAFAD2] text-xl flex md:hidden cursor-pointer'
                            onClick={toggleMenu}
                        >
                            {
                                isMenuOpen ? (<i className="fa-regular fa-xmark"></i>) : (<i className="fa-regular fa-bars"></i>)
                            }
                        </span>
                        <ReactWhatsapp number="+971 56 464 8961" className=' border-[#FAFAD2] rounded-full border py-1 px-3.5 text-[#0c5b47] inline-flex gap-2 items-center' message="Hello World!!!" ><i className="fa-brands fa-whatsapp"></i> Whatsapp</ReactWhatsapp>
                    </div>
                </div>
                <div className={`${userOption ? 'block' : 'hidden'} absolute z-[80] top-16 px-3.5 py-2 transition-all ease-in duration-300 select-none right-12 w-32 bg-white shadow-sm shadow-gray-400`}>
                    <Link href="/login" className="text-[#0c5b47] items-center hover:text-gray-300">
                        Login
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Menu */}

            <div className={`fixed inset-y-0 left-0 w-[80%] z-[80] bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : ' -translate-x-full'}`}>
                <MobileNav />
            </div>
            {/* Bottom nav */}
            <div className="z-[70] w-full flex flex-row md:hidden justify-evenly items-center gap-5 fixed rounded-t-[40px] bottom-0 left-0 right-0">

                <nav className="mx-auto w-full sm:max-w-md ">
                    {/* <Link href="#" className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-3xl bg-[#EBBC5E] text-white shadow-lg transition duration-100 hover:bg-green-400 hover:text-black sm:-top-8 sm:h-16 sm:w-16">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                        </svg>
                    </Link> */}

                    <div className="flex justify-between gap-8 bg-black px-10 py-4 text-xs sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-xl">
                        <Link href='/' className="flex flex-col items-center gap-1 text-[#FAFAD2]">
                            <span className='text-xl'><i className="fa-solid fa-house"></i></span>
                            <span>Home</span>
                        </Link>

                        <Link href="/flowers" className="mr-4 flex flex-col items-center gap-1 text-[#FAFAD2] transition duration-100 hover:text-gray-500 active:text-gray-600 sm:mr-8">
                            <span className='text-xl'><i className="fa-brands fa-shopify"></i></span>
                            <span>Flowers</span>
                        </Link>

                        <Link href="#" className="ml-4 flex flex-col items-center gap-1 text-[#FAFAD2] transition duration-100 hover:text-gray-500 active:text-gray-600 sm:ml-8">
                            <span className='text-xl'><i className="fa-duotone fa-blog"></i></span>
                            <span>Blog</span>
                        </Link>

                        <Link href="/about" className="flex flex-col items-center gap-1 text-[#FAFAD2] transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <span className='text-xl'><i className="fa-regular fa-user"></i></span>
                            <span>About</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </nav>
    );
};

export default NavBar;

export const NavLink = ({ to, children, onClick }) => {
    return (
        <Link
            href={to}
            onClick={onClick}
            className="text-[#0c5b47] hover:border-b-2 uppercase text-sm font-['Poppins'] font-normal hover:border-pink-300 text-center hover:text-[#E6BE8A] transition duration-300 cursor-pointer"
        >
            {children}
        </Link>
    );
};