"use client"
import { useState, useEffect } from "react"
import ReactWhatsapp from "react-whatsapp"

export default function Flowers() {
    const [flowers, setFlowers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/flowers')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFlowers(data.data)
                setLoding(false)
            })
    }, [])
    return (
        <section>
            <div className="mx-auto z-50 bg-white max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                    <p className="mt-4 max-w-4xl text-gray-500">
                        We take pride in offering a diverse and exquisite range of floral collections. Whether you’re celebrating a special occasion, expressing heartfelt emotions, or simply brightening up your space, we have the perfect bouquet or arrangement for every moment.
                    </p>
                </header>

                <div className="mt-8 sm:flex sm:items-center sm:justify-between">
                    <div className="block sm:hidden">
                        <button
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        >
                            <span className="text-sm font-medium"> Filters & Sorting </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4 rtl:rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden sm:flex sm:gap-4">
                        <div className="relative">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                                >
                                    <span className="text-sm font-medium"> Availability </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <div
                                    className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                                >
                                    <div className="w-96 rounded border border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> 0 Selected </span>

                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterInStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPreOrder"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOutOfStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="relative">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                                >
                                    <span className="text-sm font-medium"> Price </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <div
                                    className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                                >
                                    <div className="w-96 rounded border border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> The highest price is $600 </span>

                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <div className="border-t border-gray-200 p-4">
                                            <div className="flex justify-between gap-4">
                                                <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceFrom"
                                                        placeholder="From"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>

                                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceTo"
                                                        placeholder="To"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    <div className="hidden sm:block">
                        <label htmlFor="SortBy" className="sr-only">SortBy</label>

                        <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
                            <option>Sort By</option>
                            <option value="Title, DESC">Title, DESC</option>
                            <option value="Title, ASC">Title, ASC</option>
                            <option value="Price, DESC">Price, DESC</option>
                            <option value="Price, ASC">Price, ASC</option>
                        </select>
                    </div>
                </div>

                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        flowers.map((flower, i) => {
                            return (
                                <li key={i}>
                                    <a href="#" className="group block overflow-hidden">
                                        <img
                                            src={flower.image}
                                            alt=""
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />

                                        <div className="px-4 pt-2 w-auto relative font-['Poppins'] text-[#0c5b47] text-center">

                                            <p className=" text-sm text-center capitalize">
                                                {flower.title}
                                                {/* Flowr title */}
                                            </p>

                                            <ReactWhatsapp number="+971 56 464 8961" className='text-base text-[#0c5b47] cursor-pointer underline my-2' message="Hello World!!!" >Buy Now</ReactWhatsapp>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
        </section>
    )
}