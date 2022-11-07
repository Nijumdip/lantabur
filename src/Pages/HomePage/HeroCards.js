import React from "react";

const HeroCards = () => {
    return (
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
                                    <div>
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
                                                Holisticly morph distinctive methodologies and
                                                vertical e-tailers. Rapidiously grow customized
                                                data.
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
    );
};

export default HeroCards;
