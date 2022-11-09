import React from "react";

const HeroCards = () => {
    return (
        <div
            aria-hidden="true"
            class="pointer-events-none flex-wrap lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl mt-10"
        >
            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8 text-green-900">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                        
                        <div class="h-64 w-44 overflow-hidden border border-green-900 rounded-lg sm:opacity-0 lg:opacity-100">
                            <div className="p-1 flex flex-col justify-center items-center">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                    alt=""
                                    class="h-20 w-20 rounded-full object-cover "
                                />

                                <h4 className="text-xl font-semibold tracking-tight text-green-600">
                                    Lantabur IT
                                </h4>
                                <p className="mb-2 leading-normal">
                                  This is Provide web development services
                                </p>
                            </div>
                        </div>

                        <div class="h-64 w-44 overflow-hidden border border-green-900 rounded-lg sm:opacity-0 lg:opacity-100">
                            <div className="p-1 flex flex-col justify-center items-center ">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                    alt=""
                                    class="h-20 w-20 rounded-full object-cover "
                                />

                                <h4 className="text-xl font-semibold tracking-tight text-green-600">
                                    Programming Pathshala
                                </h4>
                                <p className="mb-2 leading-normal">
                                    This will be a programming learning platform
                                </p>
                                <div className="p-4"></div>
                            </div>
                        </div>
                    </div>

                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        
                        <div class="h-64 w-44 overflow-hidden border border-green-900 rounded-lg sm:opacity-0 lg:opacity-100">
                            <div className="pt-16 flex flex-col justify-center items-center ">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                    alt=""
                                    class="h-20 w-20 rounded-full object-cover "
                                />

                                <h4 className="text-xl font-semibold tracking-tight text-green-600">
                                DevShop
                                </h4>
                                <p className="mb-2 leading-normal">
                                This will be a web and app buy-selling platform
                                </p>
                                <div className="p-4"></div>
                            </div>
                        </div>

                        <div class="h-64 w-44 overflow-hidden border border-green-900 rounded-lg sm:opacity-0 lg:opacity-100">
                            
                            <div className="p-1 flex flex-col justify-center items-center ">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                    alt=""
                                    class="h-20 w-20 rounded-full object-cover "
                                />

                                <h4 className="text-xl font-semibold tracking-tight text-green-600">
                                Bizodio
                                </h4>
                                <p className="mb-2 leading-normal">
                                This will be an audio listening platform for unique business plan
                                </p>
                                <div className="p-4">
                                </div>
                            </div>
                        </div>

                        <div class="h-64 w-44 overflow-hidden border border-green-900 rounded-lg sm:opacity-0 lg:opacity-100">
                            
                            <div className="p-1 flex flex-col justify-center items-center ">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                    alt=""
                                    class="h-20 w-20 rounded-full object-cover "
                                />

                                <h4 className="text-xl font-semibold tracking-tight text-green-600">
                                HireDev
                                </h4>
                                <p className="mb-2 leading-normal">
                                It's a developer hiring platform
                                </p>
                                <div className="p-4">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        
                        <div class="h-64 w-44 overflow-hidden border border-green-900 rounded-lg sm:opacity-0 lg:opacity-100">
                                
                        <div className="p-1 flex flex-col justify-center items-center ">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                alt=""
                                class="h-20 w-20 rounded-full object-cover "
                            />

                            <h4 className="text-xl font-semibold tracking-tight text-green-600">
                            Lantabur IT
                            </h4>
                            <p className="mb-2 leading-normal">
                            That will be provided App development service
                            </p>
                            <div className="p-4">
                            </div>
                        </div>
                        </div>

                        <div class="h-64 w-44 overflow-hidden border border-green-900 rounded-lg sm:opacity-0 lg:opacity-100">
                            
                            <div className="p-1 flex flex-col justify-center items-center ">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                    alt=""
                                    class="h-20 w-20 rounded-full object-cover "
                                />

                                <h4 className="text-xl font-semibold tracking-tight text-green-600">
                                Lantabur IT
                                </h4>
                                <p className="mb-2 leading-normal">
                                That will be provided any kind of software development service

                                </p>
                                <div className="p-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
       
    );
};

export default HeroCards;
