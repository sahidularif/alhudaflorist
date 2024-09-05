"use client";

import { resetPassword } from '@/app/auth/reset_password/resetPassword';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";


function ForgotPasswordForm({ token }) {

    const initialValues = {
        email: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    });

    const handleSubmit = async ({email}) => {
        console.log(email);
        const message = await resetPassword(email);
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
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <ToastContainer autoClose={8000} />
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
                    <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Forgot your password?
                    </h1>
                    <p className="font-light py-4 text-sm text-gray-500">Don&apos;t fret! Just type in your email and we will send you a code to reset your password!</p>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        <Form className="mt-2 space-y-4 lg:mt-3 md:space-y-5" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="p-2 mb-2 mt-2 text-xs text-red-800 rounded-lg bg-red-50"
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="terms" className="font-light text-gray-500 ">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-[#1B1B1B] text-[#FAFAD2] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset password</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default ForgotPasswordForm;