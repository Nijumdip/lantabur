import React from "react";

const HeroSection = () => {
    return (
        <div class="relative overflow-hidden bg-white my-10 shadow-2xl shadow-green-900">
            <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    
                    <div class="sm:max-w-lg">
                        <h1 class="font text-4xl font-bold tracking-tight text-green-900 sm:text-6xl">
                            Services We Provide
                        </h1>
                        <p class="mt-4 text-xl text-green-900">
                            Globally expedite sticky platforms whereas end-to-end vortals. 
                            Proactively coordinate quality vectors vis-a-vis supply chains. Quickly
                            engage client-centric web services. Grow premier ideas rather than
                            bricks-and-clicks strategic theme areas distributed for stand-alone web
                            readiness.
                        </p>
                        <div className="text-green-900">
                            <button
                                className=" py-5 px-6 mb-2 border border-green-700 
                        hover:bg-green-600 focus:ring-4 focus:outline-none 
                        focus:ring-green-300 font-medium rounded-lg text-sm text-center mr-2  dark:border-green-500  
                        hover:text-white dark:hover:bg-green-600 
                        dark:focus:ring-green-800"
                            >
                                Start Free Trail
                            </button>
                            <button
                                className=" py-5 px-6 border border-green-700 
                        hover:bg-green-600 focus:ring-4 focus:outline-none 
                        focus:ring-green-300 font-medium rounded-lg text-sm text-center mr-2  dark:border-green-500  
                        hover:text-white dark:hover:bg-green-600 
                        dark:focus:ring-green-800"
                            >
                                Ready to start?
                            </button>
                        </div>
                    </div>

                    <div>
                        <div class="mt-10">
                            <div
                                aria-hidden="true"
                                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div class="flex items-center space-x-6 lg:space-x-8 ">
                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            
                                            <div class="h-64 w-44 overflow-hidden border rounded-lg sm:opacity-0 lg:opacity-100">
                                                <div className="w-full rounded-lg shadow-md lg:max-w-sm">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                        alt=""
                                                        class="h-10 w-10 object-cover object-center"
                                                    />

                                                    <div className="p-4">
                                                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                                                            Web Development
                                                        </h4>
                                                        <p className="mb-2 leading-normal">
                                                            Holisticly morph distinctive
                                                            methodologies and vertical e-tailers.
                                                            Rapidiously grow customized data.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>

                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>

                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
