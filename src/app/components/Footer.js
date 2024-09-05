import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (

        <footer className="bg-[#FEFAF3]">
            <div className="mx-auto max-w-screen-xl px-4 pt-4 pb-16 sm:px-6 lg:px-8">

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center sm:text-left">
                        {/* <h3 className="text-base font-medium uppercase text-[#18181F] ">alhudaflorist</h3> */}
                        <img src="/assets/Samira.png" className="w-36 grayscale contrast-200" alt="tailus logo" width="144" height="68" />
                        <p className='text-[#0c5b47]/80 transition hover:text-[#18181F]/75 mt-8'>At Alhudaflorist, we&apos;re passionate about delivering the freshest and most beautiful flowers to our customers across the UAE</p>
                        <div className="mt-10">
                    
                </div>
           
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-base font-medium uppercase text-[#18181F] ">Our Services</p>

                        <ul className="mt-8 space-y-4 text-xs">
                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/">
                                    Wedding flowers
                                </a>
                            </li>

                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/"> Anniversary </a>
                            </li>

                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/">Happy birth day</a>
                            </li>

                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/">Occasion</a>
                            </li>
                        </ul>
                    </div>
                    {/* #E6BE8A #18181F*/}
                    <div className="text-center sm:text-left">
                        <p className="text-base font-medium uppercase text-[#18181F] ">Resources</p>

                        <ul className="mt-8 space-y-4 text-xs">
                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/"> Online Guides </a>
                            </li>

                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/">
                                    Conference Notes
                                </a>
                            </li>

                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/"> Forum </a>
                            </li>

                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/"> Downloads </a>
                            </li>

                            <li>
                                <a className="text-[#0c5b47]/80 transition hover:text-[#18181F]/75" href="/">
                                    Upcoming Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left flex flex-col">
                    <p className="text-base font-medium uppercase text-[#18181F] ">Follow us social</p>

                        <div className='mt-8 grid grid-cols-3 gap-2'>
                            <a href="https://www.facebook.com/profile.php?id=61563496229140" className="group relative flex h-12 items-end overflow-hidden bg-gray-100 shadow-lg md:h-20">
                               {/* <Image src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-3.jpg" loading="lazy" width={100} height={100} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" /> */}
                                <img src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-3.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>
                            <a href="#" className="group relative flex h-12 items-end overflow-hidden bg-gray-100 shadow-lg md:h-20">
                                <img src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-3.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>
                            <a href="#" className="group relative flex h-12 items-end overflow-hidden bg-gray-100 shadow-lg md:h-20">
                                <img src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-3.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>
                            
                        </div>
                    </div>
                </div>

               
            </div>
            <div className="bg-white p-4 sm:flex sm:items-center sm:justify-center">
                <p className="text-center text-xs text-[#0c5b47]/80 sm:mt-0 sm:text-right">
                © 2024 Alhudaflorist, All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;