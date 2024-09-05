"use client"
import { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/app/components/layout/PageLayout";
import { toast, ToastContainer } from "react-toastify";

const Login = ({ searchParams }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");

    const router = useRouter();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),

        password: Yup.string().required("Password is required"),
    });

    const handleLogin = async (data) => {
        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });
        if (!result?.ok) {
            toast.error(result?.error);
            setError(result.error)
            return;
        }

        router.push(searchParams.callbackUrl ? searchParams.callbackUrl : "/");
    };
    return (

        <PageLayout>
            <ToastContainer />
            <div className="relative py-16 bg-white">
                <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="rounded-3xl border border-[#E6BE8A] bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
                            <div className="p-8 py-12 sm:p-16">
                                <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 ">Sign in to your account</h2>
                                <br />
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleLogin}
                                >
                                    <Form className="space-y-8">

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-gray-600">Email</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                id="email"
                                                autocomplete="username"
                                                className="focus:outline-none block w-full rounded-md border border-[#E6BE8A]  bg-[#FFF0E9] px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="p-2 mb-2 mt-2 text-xs text-red-800 rounded-lg bg-red-50"
                                        />
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="pwd" className="text-gray-600">Password</label>
                                                <Link href="reset_password" className="-mr-2 p-2" type="reset">
                                                    <span className="text-sm text-blue-400">Forgot your password ?</span>
                                                </Link>
                                            </div>
                                            <Field
                                                type="password"
                                                name="password"
                                                id="password"
                                                autocomplete="current-password"
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
                                            Don&apos;t have an account ?
                                            <a href="register" class="text-blue-400"> Sign up</a>
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

export default Login