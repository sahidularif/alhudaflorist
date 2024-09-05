"use client"
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

export default function SettingsPage() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");

    const initialValues = {
        title: "",
        image: "",
        price: "",
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        image: Yup.string().required("Image is required"),
        price: Yup.number().required("Price is required").positive().integer(),
    });

    const handleProductUpload = async ({ title, image, price, category, description }) => {
        console.log(title, image, price, category, description)
        try {
            const response = await axios.post('/api/flowers', {
                title, image, price, category, description
            });
            console.log(response)
            // router.push('/');
        } catch (error) {
            console.log("Error occurred while uploading: ", error.response);
            setError("An error occurred")
        }

    };
    return (
        <section className="w-full px-6">
            <div className="w-full px-4">
                <h2 className="mb-2 py-2 text-xl font-bold text-gray-700">Settings</h2>
                <hr className="bg-black" />
                <div className="flex py-4 gap-4 flex-row items-start justify-between">

                    <div className="w-1/3">
                        <h2 className="text-xl font-semibold text-gray-700">General</h2>
                        <p className="text-sm text-gray-700">Fill this form for your site general settings.</p>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleProductUpload}
                    >
                        <Form className="w-4/6 shadow-md p-6 bg-gray-50">
                            <div className="w-full gap-4 flex flex-col">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Business Name</label>
                                    <Field type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Business name" required="" />
                                    <ErrorMessage
                                        name="title"
                                        component="div"
                                        className="alert text-danger wrap-msg"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Business Number</label>
                                    <Field type="text" name="image" id="name" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Phone number" required="" />
                                    <ErrorMessage
                                        name="image"
                                        component="div"
                                        className="alert text-danger wrap-msg"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">Business Email</label>
                                    <Field type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Email addresss" required="" />
                                    <ErrorMessage
                                        name="price"
                                        component="div"
                                        className="alert text-danger wrap-msg"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="inline-flex bg-[#1B1B1B] items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-[#FAFAD2] bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-700 hover:bg-primary-800">
                                Save
                            </button>
                        </Form>
                    </Formik>
                </div>

            </div>
        </section>
    )
}