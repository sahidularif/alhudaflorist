"use client"
import { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import PageLayout from "@/app/components/layout/PageLayout";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");

    const router = useRouter();

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "Mininum 2 characters")
            .max(30, "Maximum 30 characters")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),

        password: Yup.string().required("Password is required"),
    });

    const handleSignUp = async ({ name, email, password }) => {
        try {
            const response = await axios.post('/api/users', {
                name,
                email,
                password,
            });
            toast.success(response.data?.message);
            setTimeout(() => {
                router.push('/auth/login');
            }, 3000);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Handle 400 Bad Request (email already exists)
                setError("Email already exist");
                toast.error("Email already exist");
            } else {
                // Handle other errors
                toast.error("An error occurred");
                setError("An error occurred");
            }
        }
    };
    return (

        <PageLayout>
            <div className="relative py-16">
            <ToastContainer autoClose={5000} />
                <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="rounded-3xl border border-[#E6BE8A] bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
                            <div className="p-8 py-12 sm:p-16">
                                <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 ">Sign up to your account</h2>
                                
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSignUp}
                                >
                                    <Form className="space-y-8">
                                        <div className="space-y-2">
                                            <label htmlFor="username" className="text-gray-600">Name</label>
                                            <Field
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="focus:outline-none block w-full rounded-md border border-[#E6BE8A]  bg-[#FFF0E9] px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="p-2 mb-2 mt-2 text-xs text-red-800 rounded-lg bg-red-50"
                                        />
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-gray-600">Email</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="focus:outline-none block w-full rounded-md border border-[#E6BE8A]  bg-[#FFF0E9] px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="p-2 mb-2 mt-2 text-xs text-red-800 rounded-lg bg-red-50"
                                        />
                                        <div>
                                            <label htmlFor="password" className="text-gray-600">Password</label>
                                            <Field
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="focus:outline-none block w-full rounded-md border border-[#E6BE8A] bg-[#FFF0E9] px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                                            />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="p-2 mb-2 mt-2 text-xs text-red-800 rounded-lg bg-red-50"
                                            />
                                        </div>

                                        <button type="submit" className=" rounded-md relative bg-[#E6BE8A] text-black flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                            <span className="relative text-base font-semibold text-white">Connect</span>
                                        </button>
                                        <p class="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                                            Already have an account ?
                                            <a href="login" class="text-blue-400">Sign in</a>
                                        </p>
                                    </Form >
                                </Formik>
                            </div>
                        </div>
                        <div className="space-x-4 text-center text-gray-500">
                            <span>&copy; alhudaflorist</span>
                            <a href="#" className="text-sm hover:text-primary">Contact</a>
                            <a href="#" className="text-sm hover:text-primary">Privacy & Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>

    )
}

export default Register