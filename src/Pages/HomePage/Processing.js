import React from "react";
import ProcessCard from "./ProcessCard";

const Processing = () => {
    const processingCard = [
        {
            _id: 1,
            name: "Register for Free",
            description: "Simply sign up online for free and verify your identity.",
            img: "https://quiety.themetags.com/assets/img/pi-1.png",
        },
        {
            _id: 2,
            name: "Set up your Transfer",
            description:
                "select the option for making a payment. Follow the instructions on screen to enter the correct details",
            img: "https://quiety.themetags.com/assets/img/pi-2.png",
        },
        {
            _id: 3,
            name: "Make your Payment",
            description:
                "You can pay with cash, a check, a wire transfer, a credit card, a debit card and follow the instructions on screen ",
            img: "https://quiety.themetags.com/assets/img/pi-3.png",
        },
        {
            _id: 4,
            name: "Enjoy your Service",
            description:
                "We inform you when the money has been sent and you can also Enjoy this Service",
            img: "https://quiety.themetags.com/assets/img/pi-4.png",
        },
    ];

    return (
        <div className="py-10 ">
            <h1 className="text-4xl font-medium  mb-5 leading-9 text-center">
                Just Few Steps to Start <br />
                <span className="text-green-600"> LANTABUR</span>
            </h1>
            <div
                className="mt-10 flex flex-wrap justify-center items-center gap-5
            "
            >
                {processingCard?.map((pCard) => (
                    <ProcessCard key={pCard._id} pCard={pCard}></ProcessCard>
                ))}
            </div>
        </div>
    );
};

export default Processing;
