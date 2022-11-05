import React from "react";

const Banner = () => {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-6">
            <div className=" w-full  relative flex items-center justify-center">
                <img
                    src="https://i.ibb.co/8gDnRkM/images-1.jpg"
                    alt="dining"
                    className="w-full h-full absolute z-0 xl:block"
                />

                <div className="bg-gray-800 bg-opacity-80 text-white md:my-16  lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-center">
                        LANTABUR <br />
                        Software & IT Solutions
                    </h1>
                    <p className="text-base leading-normal text-center mt-6">
                        Lantabur is a powerful and Easy to use, Mobile friendly, highly friendly IT
                        <br />
                        solution sector. It is a mother company. For now, lantabur will have
                        Lantabur IT, Programming Pathshala, <br /> HireDev, DevShop, and Bizodio
                        websites included in this site.
                    </p>

                    <div className="text-white">
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
            </div>
        </div>
    );
};

export default Banner;
