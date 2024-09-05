"use client"
import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

function Pricing(props) {
    return (

        <div className="xl:container bg-[whitesmoke] m-auto py-20">
            <div className="m-auto border text-center py-6 w-11/12 bg-no-repeat bg-cover bg-center object-cover
            bg-[url('/assets/price_bg.jpg')]">
                <h2 className="text-2xl font-bold text-[#0c5b47] flex flex-col capitalize md:text-4xl">
                    <span>Grow your happyness with</span> <span className='text-rose-800'>Alhudaflorist</span>
                </h2>
            </div>
            <div
                className="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 w-full"
            >
                <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-4/12">
                    <div
                        aria-hidden="true"
                        className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
                    ></div>
                    <div className="relative space-y-6 p-8 sm:p-12 text-center">
                        <h3 className="text-center text-3xl font-semibold text-rose-800">Floral</h3>
                        <div>
                            <div className="relative flex justify-around">
                                <div className="flex items-end">
                                    <span className="leading-0 text-8xl font-bold text-gray-800">20</span>
                                    <div className="pb-2">
                                        <span className="block text-2xl font-bold text-rose-800">%</span>
                                        <span className="block text-xl font-bold text-primary">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul role="list" className="m-auto w-max space-y-4 py-6 text-gray-600">
                            <li className="space-x-2">
                                <i className="fa-solid fa-check text-[#E6BE8A]"></i>
                                <span>Freshness Guaranteed</span>
                            </li>
                            <li className="space-x-2">
                                <i className="fa-solid fa-check text-[#E6BE8A]"></i>
                                <span>Expertly Crafted</span>
                            </li>
                            <li className="space-x-2">
                                <i className="fa-solid fa-check text-[#E6BE8A]"></i>
                                <span>Customer Satisfaction</span>
                            </li>
                        </ul>
                        <p
                            className="mt-6 flex flex-col sm:flex-row items-center justify-center  text-center text-lg text-gray-600"
                        >
                            <span>Call us at &nbsp;</span>
                            <a href="tel:+24300" className="flex items-center text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-6"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    />
                                </svg>
                                <span className="font-semibold">+971 56 464 8961</span>
                            </a>

                        </p>
                        <p className='text-center mt-4'> OR</p>
                        <ReactWhatsapp number="+971 56 464 8961" className='relative text-white flex h-11 w-full bg-[#0c5b47] rounded-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95' message="Hello World!!!" ><i className="fa-brands fa-whatsapp"></i> &nbsp; Whatsapp</ReactWhatsapp>
                    </div>
                </div>

                <div className="group relative md:w-6/12 lg:w-7/12">
                    <div
                        aria-hidden="true"
                        className="absolute top-0 h-full w-full rounded-l-none rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
                    ></div>
                    <div className="relative p-6 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-12 lg:pl-20">
                        <ul role="list" className="space-y-4 py-6 text-gray-600">
                            <li className="space-x-2">
                                <i className="fa-solid fa-check text-[#E6BE8A]"></i>
                                <span>Discount valid for a limited time only.</span>
                            </li>
                            <li className="space-x-2">
                                <i className="fa-solid fa-check text-[#E6BE8A]"></i>
                                <span>Cannot be combined with any other offers or promotions.</span>
                            </li>
                            <li className="space-x-2">
                                <i className="fa-solid fa-check text-[#E6BE8A]"></i>
                                <span>Discount applied at checkout</span>
                            </li>
                            <li className="space-x-2">
                                <i className="fa-solid fa-check text-[#E6BE8A]"></i>
                                <span>reserves the right to modify or cancel the offer at any time</span>
                            </li>
                        </ul>
                        <p className="text-rose-800">
                            Experience the magic of Alhudaflorist today and elevate every moment with our exquisite blooms!
                        </p>
                        <div className="mt-6 flex justify-between gap-6">
                            <img
                                className="w-16 h-16"
                                src="https://m.media-amazon.com/images/I/61f69rmxlDL._AC_UF894,1000_QL80_.jpg"
                                loading="lazy"
                                alt="airbnb"
                            />
                            <img
                                className="w-16 h-16"
                                src="https://sistersftx.com/cdn/shop/products/F4302156.jpg?v=1676038923"
                                loading="lazy"
                                alt="bissell"
                            />
                            <img
                                className="w-16 h-16"
                                src="https://www.kolkataonlineflorists.com/images/FLH539-CON_big.webp"
                                loading="lazy"
                                alt="microsoft"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Pricing;