"use client"

import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as Yup from "yup";

export default function EditFlowers() {
    const {id} = useParams();
    console.log(id)
    const [flower, setFlower] = useState({})
    const fetchFlower =async ()=>{
        const res = await axios.get(`/api/flowers/${id}`);
        setFlower(res.data.data);
    }
    useEffect(()=>{
        fetchFlower()
    }, [])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const {title, image, price, category, description} = flower;
    const initialValues = { title: title, image: image, price: price, category: category, description: description };

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        image: Yup.string().required("Image is required"),
        price: Yup.number().required("Price is required").positive().integer(),
        category: Yup.string().required("Category is required"),
        description: Yup.string().required("Category is required"),
    });

    const handleProductUpload = async ({ title, image, price, category, description }) => {

        try {
            const response = await axios.put(`/api/flowers/${id}`, {
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
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
                <h2 className="mb-8 py-4 text-xl font-bold text-gray-900">Edit flowers</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleProductUpload}
                    enableReinitialize={true}
                >
                    <Form>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <Field type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type product name" required="" />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="alert text-danger wrap-msg"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Image link</label>
                                <Field type="text" name="image" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type product name" required="" />
                                <ErrorMessage
                                    name="image"
                                    component="div"
                                    className="alert text-danger wrap-msg"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                <Field type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="AED 200" required="" />
                                <ErrorMessage
                                    name="price"
                                    component="div"
                                    className="alert text-danger wrap-msg"
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                <Field as="select" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option selected="">Select category</option>
                                    <option value="Bouquet">Bouquet</option>
                                    <option value="Basket">Basket</option>
                                    <option value="Mixed">Mixed</option>
                                    <option value="Arrangement">Arrangement</option>
                                </Field>
                                <ErrorMessage
                                    name="category"
                                    component="div"
                                    className="alert text-danger wrap-msg"
                                />
                            </div>                        

                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Section for</label>
                                <Field as="select" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option selected="">Select category</option>
                                    <option value="slider">Slider</option>
                                    <option value="favourite">Our Favourites</option>
                                    <option value="gallery">Gallery of works</option>
                                    <option value="services">Services</option>
                                </Field>
                                <ErrorMessage
                                    name="category"
                                    component="div"
                                    className="alert text-danger wrap-msg"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <Field as="textarea" id="description" name="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your description here"></Field>
                            </div>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="alert text-danger wrap-msg"
                            />
                        </div>
                        <button type="submit" className="inline-flex bg-[#1B1B1B] items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-[#FAFAD2] bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Save flower
                        </button>
                    </Form>
                </Formik>
            </div>
        </section>
    )
}