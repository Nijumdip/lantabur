import React from "react";

const DownloadApp = () => {
    return (
        <div class=" bg-green-700 py-16 -mb-16">
            <div class="max-w-2xl mx-auto text-white ">
                <div class="text-center">
                    <h3 class="text-3xl mb-3"> Get The App Now and Start Learning Today . Download our fitness app </h3>
                    <p> Stay fit. All day, every day. </p>
                    <div class="flex flex-wrap justify-center my-10">
                        <div class="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2 mb-1">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                                class="w-7 md:w-8"
                                alt=""
                            />
                            <div class="text-left ml-3">
                                <p class="text-xs text-white">Download on </p>
                                <p class="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        
                        <div class="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2 mb-1">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg"
                                class="w-12 md:w-10 h-10 rounded-full"
                                alt=""
                            />
                            <div class="text-left ml-3">
                                <p class="text-xs text-white">Download on </p>
                                <p class="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>

                        <div class="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6XFI3sWFUMUbr1ttk-RfYijEtxaVDZH5S0azAQU4Sx9E09GcvZa6cgttMUQZrjU_5zk&usqp=CAU"
                                class="w-12 md:w-10 h-10 rounded-full"
                                alt=""
                            />
                            <div class="text-left ml-3">
                                <p class="text-xs text-white">Download on </p>
                                <p class="text-sm md:text-base"> App Store </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default DownloadApp;
