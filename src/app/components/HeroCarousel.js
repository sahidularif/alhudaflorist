"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../globals.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import NavBar from './Nav';

export default function HeroCarousel() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    height: '80vh'
                }}
                speed={600}
                scrollbar={true}
                parallax={true}
                loop={true}
                autoplay={true}
                zoom={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                >
                    <NavBar />
                </div>
                <SwiperSlide className="bg-no-repeat relative bg-cover bg-origin-content bg-[url('https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg')]">
                    <div className="w-full center-div h-screen">
                        <div className="flex flex-col justify-center h-auto gap-5">
                            <div className="parisienne-regular text-6xl md:text-8xl text-[#0c5b47] font-black" data-swiper-parallax="-300">
                                Wedding Flowers
                            </div>

                            <div className="text-gray-400" data-swiper-parallax="-100">
                                <p>
                                    On top of selling all kinds of flowers and bouquets, we also provide event and location oriented services!

                                </p>
                            </div>
                            <button type="button" className="px-8 py-3 w-44 font-normal uppercase text-base border rounded border-[#E6BE8A] text-[#0c5b47]">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-no-repeat relative object-cover bg-cover bg-center bg-[url('https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg')]">
                    <div className="w-full center-div h-screen">
                        <div className="flex flex-col justify-center h-auto gap-5">
                            <div className="font-['El+Messiri'] text-8xl text-[#FAFAD2] font-black" data-swiper-parallax="-300">
                                Birthday Flowers
                            </div>

                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    Daffodils are blue, tulips are red, the Alhuda flowers shop will help you the best!

                                </p>
                            </div>
                            <button type="button" className="px-8 py-3 w-44 font-normal uppercase text-base border rounded border-[#E6BE8A] text-[#FFF0E9]">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-no-repeat relative object-cover bg-cover bg-center bg-[url('https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg')]">
                    <div className="w-full center-div h-screen">
                        <div className="flex flex-col justify-center h-auto gap-5">
                            <div className="font-['El+Messiri'] text-8xl text-[#FAFAD2] font-black" data-swiper-parallax="-300">
                                Occation Flowers
                            </div>

                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    We are all incredibly proud of the fact that yearly we sell thousands upon thousands of different, gorgeous varieties of flowers!

                                </p>
                            </div>
                            <button type="button" className="px-8 py-3 w-44 font-normal uppercase text-base border rounded border-[#E6BE8A] text-[#FFF0E9]">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
