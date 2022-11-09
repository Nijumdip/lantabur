import React from "react";

const Subscription = () => {
    return (
        <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row bg-green-50 rounded-lg">
            <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                <img
                    src="https://citronfrappe.fr/wp-content/uploads/2020/07/illustration-newsletter-scherpereel-11.png"
                    alt="Envelope with a newsletter"
                    className="h-full xl:w-full lg:w-1/2 w-full "
                />
            </div>
            <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 text-green-600 mt-8">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10  mb-4 text-center xl:text-left md:mt-0 mt-4">
                    Subscribe
                </h1>
                <p className="text-base leading-normal  text-center xl:text-left">
                    Whether article spirits new her covered hastily sitting her. Money witty books
                    nor son add.
                </p>

                <div className="flex items-stretch mt-12">
                    <input
                        className="bg-green-100 rounded-lg rounded-r-none text-base leading-none text-green-600 p-5 w-4/5 border border-transparent focus:outline-none focus:border-green-500"
                        type="email"
                        placeholder="Your Email"
                    />
                    <button className="w-32 rounded-l-none hover:bg-green-600 bg-green-700 rounded text-base font-medium  text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700">
                        subscribe
                    </button>
                </div>

                
            </div>
        </div>
    );
};

export default Subscription;
