"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ReactWhatsapp from 'react-whatsapp';
export const Card = (props) => {

    const [open, setOpen] = useState(false);
    const [hoverStates, setHoverStates] = useState(
        Array(props.products.length).fill(false)
    );
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='border-[#FAFAD2]/30 border'>
            <div
                key={props.index}
                className="  group relative transition duration-500 transform hover:scale-100"
                onClick={onOpenModal}
                onMouseEnter={() =>
                    setHoverStates((prev) =>
                        prev.map((state, i) => (i === props.index ? true : state))
                    )
                }
                onMouseLeave={() =>
                    setHoverStates((prev) =>
                        prev.map((state, i) => (i === props.index ? false : state))
                    )
                }
            >
                <a href="#" className=''>
                    <img
                        src={props.product.image}
                        alt="Product"
                        className="w-full h-80 object-cover"

                    />
                    <div className="px-4 pt-2 w-auto relative font-['Poppins'] text-[#0c5b47] text-center">

                        <p className=" text-base text-center capitalize">
                            {props.product.title}
                            {/* Flowr title */}
                        </p>

                        <ReactWhatsapp number="+971 56 464 8961" className='text-base text-[#0c5b47] cursor-pointer underline my-2' message="Hello World!!!" >Order Now</ReactWhatsapp>
                    </div>

                </a>

                {/* Hidden Icons */}
                <div
                    className={`hover-manue card-icons ${hoverStates[props.index] ? "flex" : "hidden"
                        } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out w-full justify-center gap-2`}
                >
                    <div title='View Product' className="p-6 w-6 hover:bg-[#FFF0E9] cursor-pointer text-gray-400 hover:text-gray-800 transition ease-in duration-300 h-6 flex rounded-full text-sm justify-center items-center bg-[#FFF0E9] shadow-xl">
                        <i className="fa-sharp fa-solid fa-eye"></i>
                    </div>

                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='max-w-md'>
                    <img
                        src={props.product.image}
                        alt="Product"
                        className="w-full object-cover"
                        width={0} height={0} style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default Card;