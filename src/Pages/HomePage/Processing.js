import React from "react";

const Processing = () => {
    /* const processingCard = [
          {
            _id: 1,
            name: "Register for Free",
            description: "Simply sign up online for free <br /> and verify your identity.",
            img: "",
          },
          {
            _id: 2,
            name: "",
            description: "" ,
            img: "",
          },
          {
            _id: 3,
            name: "",
            description: "" ,
            img: "",
          },
          {
            _id: 4,
            name: "",
            description: "" ,
            img: "",
          }
        ]; */

    return (
        <div className="py-10 ">
            <h1 className="text-4xl font-medium  mb-5 leading-9 text-center">
                Just Few Steps to Start <span className="text-green-600"> LANTABUR</span>
            </h1>
            <div className=" px-4 w-full h-80 bg-Emerald-600 relative flex items-center justify-center">
                <img
                    src="https://t4.ftcdn.net/jpg/04/57/65/97/360_F_457659740_n4p9XApZmW1igZPqkB4aHcW3GYp3cL6s.jpg"
                    alt="dining"
                    className="w-full h-full absolute z-0 xl:block"
                />

                <div class="relative mr-2 mt-96 ">
                    <div class="bg-green-50 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                        <img className="w-20" h-20 src="https://i.ibb.co/Gkw8HTY/download-1.png" alt="" />
                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                            Register for Free
                        </h4>
                        <div class="mt-1">
                            Simply sign up online for free <br /> and verify your identity.
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Processing;
