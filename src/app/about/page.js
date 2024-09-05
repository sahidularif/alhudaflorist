import PageLayout from "../components/layout/PageLayout";

const About = () => {
    return (
        <PageLayout>
            <section className="text-gray-600 body-font bg-white">
                <div className="container px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div class="w-full px-4">
                            <div class="mt-10 lg:mt-0">
                                <span class="block mb-4 text-lg font-semibold text-primary">
                                   Al-Huda Florist
                                </span>
                                <h2
                                    class="mb-5 text-3xl font-bold text-[#1b745e] sm:text-[40px]/[48px]"
                                >
                                    Where Every Flower Tells a Story
                                </h2>
                                <p class="mb-5 text-base text-body-color dark:text-dark-6">
                                Welcome to Al Huda Florist, your trusted local florist in [Your Location]. We specialize in creating beautiful, high-quality floral arrangements for every occasion. Whether you’re celebrating a wedding, anniversary, birthday, or simply want to brighten someone’s day, our expertly crafted bouquets are designed to leave a lasting impression.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    class="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.8K</h2>
                            <p className="leading-relaxed">Customers</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">1000+</h2>
                            <p className="leading-relaxed">Flowers</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Products</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full" src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-1.jpg" alt="stats" />
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default About;