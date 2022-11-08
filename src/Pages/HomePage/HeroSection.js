import React from "react";
import HeroCards from "./HeroCards";

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
                            <span className="text-green-600">One App with thousands of Benefits </span>  
                            Globally expedite sticky platforms whereas end-to-end vortals. Quickly
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

                    <HeroCards />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
