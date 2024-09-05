"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

const Header = () => {
    const { data: session } = useSession();
    const toggleMobileMenu = () => {
        const hamburger = document.querySelector('#hamburger');
        const navbar = document.querySelector('#navbar');

        hamburger.querySelector('#line').classNameList.toggle('rotate-45');
        hamburger.querySelector('#line').classNameList.toggle('translate-y-1.5');
        hamburger.querySelector('#line2').classNameList.toggle('-rotate-45');
        hamburger.querySelector('#line2').classNameList.toggle('-translate-y-1');

        if (navbar.clientHeight === 0) {
            navbar.style.paddingTop = '20px';
            navbar.style.paddingBottom = '20px';
            navbar.style.height = `${parseInt(navbar.scrollHeight) + 60}px`;
        } else {
            navbar.style.height = '0px';
            navbar.style.paddingTop = '0px';
            navbar.style.paddingBottom = '0px';
        }
    };

    return (
        <div className="relative w-full bg-white bg-no-repeat bg-cover bg-center bg-[url('https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg')]">
            <nav className="w-full bg-transparent">
                <div className="container m-auto px-6 md:px-12 lg:px-7">
                    <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
                        <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
                        <div className="w-full flex justify-between md:w-max md:px-0">
                            <Link href="/" aria-label="logo">
                                <img src="assets/Samira.png" className="w-36 grayscale contrast-200" alt="tailus logo" width="144" height="68" />
                            </Link>

                            <div className="flex items-center md:hidden max-h-10">
                                <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative z-40 px-2 py-3 sm:-mr-6">
                                    <div id="line"
                                        className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                    <div id="line2"
                                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300">
                                    </div>
                                </label>
                            </div>
                        </div>

                        <label role="button" htmlFor="toggle_nav" className="fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"></label>

                        <div className="flex z-50 flex-col md:flex-row justify-between 
                            items-center gap-y-4 p-6 bg-white md:w-8/12 
                            md:gap-y-4 md:p-0 
                            md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
                            md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0">
                            <div className="flex md:hidden w-full pb-5">
                                <Link href="/" aria-label="logo">
                                    <img src="assets/Samira.png" className="w-36 grayscale contrast-200" alt="tailus logo" width="144" height="68" />
                                </Link>
                            </div>
                            <div className="block w-full h-full md:h-auto">
                                <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
                                    <li>
                                        <Link href="/" className="block md:px-3">
                                            <div className="relative text-yellow-800
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800">
                                                <span>Home</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="collections" className="block md:px-3 group">
                                            <div className="relative text-[#1b745e]
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span className="transition group-hover:text-yellow-700">Flowers</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="about" className="block md:px-3 group">
                                            <div className="relative text-[#1b745e]
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span className="transition group-hover:text-yellow-700">About</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="contact" className="block md:px-3 group">
                                            <div className="relative text-[#1b745e]
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span className="transition group-hover:text-yellow-700">Contact</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col">
                                {
                                    session ? (
                                        <Link href="/admin" title="Start buying" className="group w-full py-3 px-6 text-center transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                            <span className="block text-gray-700 group-focus:text-yellow-700">
                                                Dashboard
                                            </span>
                                        </Link>
                                    ) :
                                        (
                                            <Link href="/auth/login" title="Start buying" className="group w-full py-3 px-6 text-center transition text-base active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                                <span className="block text-[#1b745e] font-semibold group-focus:text-yellow-700">
                                                    Sign In
                                                </span>
                                            </Link>
                                        )
                                }
                                <Link href="/auth/login" title="Start buying" className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max">
                                    <span className="block text-white font-semibold">
                                        Shop Now
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="h-auto w-full flex flex-col">
                <div className="container m-auto px-6 sm:pt-4 sm:pb-6 md:px-8 lg:px-10">
                    <div className="flex items-center flex-wrap gap-12 lg:gap-0">
                        <div className="lg:w-5/12 space-y-4">
                            <span className="flex space-x-2">
                                <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                                <span className="font-medium text-gray-600">New this season</span>
                            </span>
                            <h1 className="text-4xl font-bold md:text-5xl text-gray-800">Alhuda Florist</h1>
                            <p className="text-3xl font-bold md:text-4xl">Your Oasis of Floral Delights in the Heart of the UAE!</p>
                            <p className="text-lg text-gray-700">Elevate Every Occasion with Our Handcrafted Bouquets and Arrangements.</p>

                            <div className="flex space-x-4">
                                <a href='/collections' type="button" title="Start buying" className="w-full max-w-sm py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                                    <span className="block text-white text-nowrap font-semibold">
                                        Explore now
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:flex bottom-8 w-full">
                    <div className="container sm:flex-row sm:items-center sm:justify-between py-4 gap-4 m-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between md:px-12 lg:px-7">
                        <Link href="" className="space-x-4 sm:flex md:items-center">
                            <Image className="w-14 h-14 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKORutUEVkdtnSfhP8dvTy3wgaNuVvwxX3bbVQJcxCkg&s" alt="Alhuda florist customer support" width={0} height={0} style={{ width: '56px', height: '56px' }} />
                            <div className="text-gray-600">
                                <span className="text-sm">Question ?&nbsp;</span>
                                <ReactWhatsapp number="+971 56 464 8961" className='text-base text-[#0c5b47] cursor-pointer my-2' message="Hello World!!!" >Talk to our CEO</ReactWhatsapp>
                            </div>
                        </Link>
                        <div>
                            <Link href="https://www.facebook.com/profile.php?id=61563496229140" className="hover:text-yellow-700"><i class="fa-brands text-xl fa-facebook fa-fw"></i> </Link>
                            <Link href="#" className="hover:text-yellow-700"><i class="fa-brands text-xl fa-instagram fa-fw"></i> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
