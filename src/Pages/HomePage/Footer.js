import React from "react";

const Footer = () => {
    return (
        <div className="relative flex justify-start md:justify-center md:items-end pb-10">
            <img
                className="absolute object-cover top-10 h-full w-full xl:mt-5 z-0"
                src="https://png.pngtree.com/thumb_back/fh260/background/20210824/pngtree-yellow-green-background-stock-images-wallpaper-image_769660.jpg"
                alt="background"
            />
            <div className="flex pt-10 md:pt-12 lg:pt-10 xl:pt-96   px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
                <div className="flex  flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
                    <div className="flex justify-start items-center space-x-4">
                        <p className="w-60 text-xl xl:text-2xl font-semibold leading-normal text-green-900">
                            LANTABUR
                        </p>
                    </div>

                    <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8 text-green-900">
                        <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                            <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5">
                                Community
                            </h2>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                About Us
                            </button>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                Guidelines and how to
                            </button>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                Quote from the best
                            </button>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                How to start a blog
                            </button>
                        </div>

                        <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                            <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-green-900">
                                Getting Started
                            </h2>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                About Us
                            </button>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                Guidelines and how to
                            </button>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                Quote from the best
                            </button>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                How to start a blog
                            </button>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                Quote from the best
                            </button>
                            <button className="text-left text-base hover:text-green-900 leading-none text-green-700">
                                Guidelines and how to
                            </button>
                        </div>

                        <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                            <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-green-900">
                                Resources
                            </h2>
                            <button className="text-base text-left hover:text-green-900 leading-none text-green-700">
                                Accessibility
                            </button>
                            <button className="text-base text-left hover:text-green-900 leading-none text-green-700">
                                Usability
                            </button>
                            <button className="text-base text-left hover:text-green-900 leading-none text-green-700">
                                Marketplace
                            </button>
                            <button className="text-base text-left hover:text-green-900 leading-none text-green-700">
                                Design &amp; Dev
                            </button>
                            <button className="text-base text-left hover:text-green-900 leading-none text-green-700">
                                Marketplace
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
