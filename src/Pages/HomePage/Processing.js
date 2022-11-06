import React from "react";

const Processing = () => {
    return (
        <div className="py-10">
            <h1 className="text-4xl font-medium  mb-5 leading-9 text-center">
            Just Few Steps to Start <span className="text-green-600"> LANTABUR</span>
            </h1>
            <div className=" w-full h-80 bg-Emerald-600 relative flex items-center justify-center">
                <img
                    src="https://t4.ftcdn.net/jpg/04/57/65/97/360_F_457659740_n4p9XApZmW1igZPqkB4aHcW3GYp3cL6s.jpg"
                    alt="dining"
                    className="w-full h-full absolute z-0 xl:block"
                />

                <div class="relative px-4 mt-96 ">
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-baseline">
                            <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                New
                            </span>
                            <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                2 baths &bull; 3 rooms
                            </div>
                        </div>

                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                            A random Title
                        </h4>

                        <div class="mt-1">
                            $1800
                            <span class="text-gray-600 text-sm"> /wk</span>
                        </div>
                        <div class="mt-4">
                            <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
                            <span class="text-sm text-gray-600">(based on 234 ratings)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Processing;
