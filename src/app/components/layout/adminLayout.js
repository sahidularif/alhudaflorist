"use client"
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react"
export default function AdminLayout({ children }) {
    // const { data: session, status } = useSession();
    // console.log(data, status)
    return (
        <div className="bg-white m-0 p-0">
            <aside
                className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-5/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
            >
                <div className="">
                    <div className="-mx-6 px-6 py-4">
                        <Link href="/" title="home">
                            <h1 className='text-2xl font-bold'>Alhudaflorist</h1>
                        </Link>
                    </div>

                    <ul className="mt-8 space-y-2 tracking-wide">
                        <li>
                            <Link
                                href="/admin"
                                aria-label="dashboard"
                                className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                            >
                                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                        className="fill-current text-cyan-400"
                                    ></path>
                                    <path
                                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                        className="fill-current text-cyan-200 group-hover:text-cyan-300"
                                    ></path>
                                    <path
                                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                        className="fill-current group-hover:text-sky-300"
                                    ></path>
                                </svg>
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/admin/addflowers"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600"
                                        fillRule="evenodd"
                                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700">Add Flowers</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/admin/settings"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                                        d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600"
                                        fill-rule="evenodd"
                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/auth/reset_password"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                                        d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600"
                                        fill-rule="evenodd"
                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700">Change Password</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="-mx-6 flex items-center justify-between px-6 pt-4">
                    <button onClick={() => {signOut({callbackUrl: "/auth/login"})}} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                        <span className="group-hover:text-gray-700">Logout</span>
                    </button>
                </div>
            </aside>

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="sticky z-50 top-0 h-auto bg-white lg:py-2.5">
                    <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
                        <h5 hidden className="text-2xl font-medium text-gray-600 lg:block">Dashboard</h5>
                        <button className="-mr-2 h-16 w-12 border-r lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="my-auto h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <div className="flex space-x-4">
                            {/* <div hidden className="md:block">
                                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3">
                                        <svg
                                            xmlns="http://ww50w3.org/2000/svg"
                                            className="w-4 fill-current"
                                            viewBox="0 0 35.997 36.004"
                                        >
                                            <path
                                                id="Icon_awesome-search"
                                                data-name="search"
                                                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="search"
                                        name="leadingIcon"
                                        id="leadingIcon"
                                        placeholder="Search here"
                                        className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300"
                                    />
                                </div>
                            </div> */}
                            <button
                                aria-label="search"
                                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden"
                            >
                                <svg
                                    xmlns="http://ww50w3.org/2000/svg"
                                    className="mx-auto w-4 fill-current text-gray-600"
                                    viewBox="0 0 35.997 36.004"
                                >
                                    <path
                                        id="Icon_awesome-search"
                                        data-name="search"
                                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                    ></path>
                                </svg>
                            </button>
                            <div className="flex items-center gap-x-3">

                                <Link
                                    href="/admin/addflowers"
                                    className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-[#FAFAD2] transition-colors duration-200 bg-blue-600 font-bold rounded-lg sm:w-auto gap-x-2 hover:bg-gray-600">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3098_154395)">
                                            <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3098_154395">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span>Upload</span>
                                </Link>
                            </div>
                            <button
                                aria-label="chat"
                                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="m-auto h-5 w-5 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                    />
                                </svg>
                            </button>
                            <button
                                aria-label="notification"
                                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="m-auto h-5 w-5 text-gray-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-8 z-10">
                    <div className="flex h-auto pt-12 pb-8 items-start justify-start rounded-xl border-2 border-dashed border-gray-300">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}