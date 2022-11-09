import React from "react";
import SearchCarousel from "./SearchCarousel";

const Searchbar = () => {
    return (
        <div className='bg-green-50  pt-20 pb-24'>
            <div className=" flex flex-wrap  justify-around items-center mb-10">
                <div>
                    <h1 className="text-4xl font-medium text-center">
                        All Topics of <span className="text-green-600">LANTABUR</span>
                    </h1>
                </div>
                <div>
                    <div class="relative px-2">
                        <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                        <input
                            type="text"
                            class="bg-white border hover:border-green-600 h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                            name=""
                        />
                        <span class="absolute top-4 right-5 border-l pl-4">
                            <i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
                        </span>
                    </div>
                </div>
            </div>
            <SearchCarousel />
        </div>
    );
};

export default Searchbar;
