"use client"

import emailjs from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import * as Yup from "yup";

const ContactFrom = () => {
    const form = useRef();
    const initialValues = {
        to_name: "", email: "", message: ""
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        message: Yup.string().required("Message is required")
    });

    const handleSendEmail = async (e) => {
        e.preventDefault();
        // console.log(formValue);
        emailjs
            .sendForm('service_d7d71pn', 'template_u9kic78', form.current, {
                publicKey: 'zblrod4ZeGeWLRYlR',
            })
            .then(
                () => {
                    console.log("success")
                    Swal.fire({
                        title: "Message sent successfully",
                        text: "Your mail sent to info@alhudaflorist.com",
                        icon: "success"
                    })
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );


    };
    return (
        <section className="bg-white">
            <div className="container px-8 py-12 mx-auto">
                <div className=" w-[80%]">
                    <p className="font-medium text-gray-800">Contact us</p>
                    <p className="mt-3 text-gray-500">At Alhuda Florist, we understand that every flower tells a story, and we are honored to be a part of your cherished moments. Whether you&apos;re expressing joy, love, gratitude, or sympathy, our mission is to create unforgettable floral experiences that leave a lasting impression.</p>
                    <p className="mt-3 text-gray-500">Join us in celebrating life&apos;s most precious moments with the timeless beauty of flowers. Discover the artistry and excellence of Alhuda Florist where every bloom tells a tale of love, joy, and elegance.</p>
                </div>

                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.800013177454!2d55.34411617538334!3d25.243659977681045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE0JzM3LjIiTiA1NcKwMjAnNDguMSJF!5e0!3m2!1sen!2sbd!4v1709874139251!5m2!1sen!2sbd" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.800013177454!2d55.34411617538334!3d25.243659977681045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE0JzM3LjIiTiA1NcKwMjAnNDguMSJF!5e0!3m2!1sen!2sbd!4v1709874139251!5m2!1sen!2sbd" width="600" height="450" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)', border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs"><i className="fa-duotone fa-location-dot"></i> ADDRESS</h2>
                                    <p className="mt-1">7-9 31A St - Garhoud - Dubai - United Arab Emirates</p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs"><i className="fa-duotone fa-envelope"></i> EMAIL</h2>
                                    <a className="text-indigo-500 leading-relaxed">alhudaoasisflowers@.com</a>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"><i className="fa-brands fa-whatsapp"></i> WhatsApp</h2>
                                    <p className="leading-relaxed">+971 56 464 8961</p>
                                </div>
                            </div>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            <Form ref={form} onSubmit={handleSendEmail}>
                                <div className="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                                    <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                                    <div className="relative mb-4">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <Field type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="alert text-danger wrap-msg"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <Field type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="alert text-danger wrap-msg"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <Field as="textarea" id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className="alert text-danger wrap-msg"
                                        />
                                    </div>
                                    <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </section>
            </div>
        </section>
    )
}
export default ContactFrom;