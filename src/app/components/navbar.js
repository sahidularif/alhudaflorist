"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar(props) {
    const { data: session } = useSession();
    return (
        <nav className="bg-gray-50">
            <div className="container m-auto px-6 md:px-12 lg:px-7">
                <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
                    <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
                    <div className="w-full flex justify-between md:w-max md:px-0">
                        <Link href="/" aria-label="logo">
                            <h1 className='text-2xl font-bold sr-only'>Alhudaflorist</h1>
                            <img src="/assets/Samira.png" className="w-36 grayscale contrast-200" alt="Alhuda florist" width="144" height="68" />
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
                                <Image src="images/logo.svg" className="w-36 grayscale contrast-200" alt="tailus logo" width={144} height={144} />
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
                                    <Link href="/about" className="block md:px-3 group">
                                        <div className="relative text-gray-600
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition group-hover:text-yellow-700">About</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="block md:px-3 group">
                                        <div className="relative text-gray-600
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition group-hover:text-yellow-700">Contact</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col">
                            {
                                !session ? (
                                    <button type="button" title="Start buying" className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max">
                                        <span className="block text-white font-semibold">
                                            Sign In
                                        </span>
                                    </button>
                                ) : false
                            }
                            <button type="button" title="Start buying" className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max">
                                <span className="block text-white font-semibold">
                                    Shop now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;