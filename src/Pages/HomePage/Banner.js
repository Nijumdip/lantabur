import React from "react";

const Banner = () => {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-6">
            <div className=" w-full  relative flex items-center justify-center">
                <img
                    src="https://i.ibb.co/4sYZ8gC/img-2.png"
                    alt="dining"
                    className="w-full h-full absolute z-0 hidden xl:block"
                />
                <img
                    src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
                    alt="dining"
                    className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
                />
                <img
                    src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
                    alt="dining"
                    className="w-full h-full absolute z-0  sm:hidden "
                />
                <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">
                        LANTABUR <br />
                        Software & IT Solutions
                    </h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                        Lantabur is a powerful and Easy to use, Mobile friendly, highly friendly IT
                        <br />
                        solution sector. It is a mother company. For now, lantabur will have
                        Lantabur IT, Programming Pathshala, <br /> HireDev, DevShop, and Bizodio
                        websites included in this site.
                    </p>

                    <div>
                        <button
                            className=" py-6 px-6 mb-2 text-white border border-green-700 
                        hover:bg-green-600 focus:ring-4 focus:outline-none 
                        focus:ring-green-300 font-medium rounded-lg text-sm text-center mr-2  dark:border-green-500 dark:text-green-500 
                        dark:hover:text-white dark:hover:bg-green-600 
                        dark:focus:ring-green-800"
                        >
                            Start Free Trail
                        </button>
                        <button
                            className=" py-6 px-6 text-white border border-green-700 
                        hover:bg-green-600 focus:ring-4 focus:outline-none 
                        focus:ring-green-300 font-medium rounded-lg text-sm text-center mr-2  dark:border-green-500 dark:text-green-500 
                        dark:hover:text-white dark:hover:bg-green-600 
                        dark:focus:ring-green-800"
                        >
                            Ready to start?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
