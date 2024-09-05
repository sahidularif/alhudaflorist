"use client";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import React, { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { changePassword } from '@/app/auth/reset_password/changePassword';

function ResetPasswordForm({ token }) {
    const [message, setMessage] = useState("");
    toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    const handleSubmit = async ({ email, password }) => {
        try {
            const message = await changePassword(token, password);
            console.log(message)
            setMessage(message);
        } catch (error) {
            console.log(error.message)
            setMessage(error.message);
        }
    }
    const initialValues = {
        password: "",
        confirm_password: ""
    };

    const validationSchema = Yup.object({
        password: Yup.string().required(),
        confirm_password: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <ToastContainer autoClose={8000} />
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Change Password
                    </h2>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        <Form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                                <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="p-2 mb-2 mt-2 text-xs text-red-800 rounded-lg bg-red-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                                <Field type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                <ErrorMessage
                                    name="confirm_password"
                                    component="div"
                                    className="p-2 mb-2 mt-2 text-xs text-red-800 rounded-lg bg-red-50"
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="newsletter" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-[#1B1B1B] text-[#FAFAD2] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset passwod</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default ResetPasswordForm;