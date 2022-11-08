import React from "react";
import ProcessCard from "./ProcessCard";

const Processing = () => {
    const processingCard = [
        {
            _id: 1,
            name: "Register for Free",
            description: "Simply sign up online for free <br /> and verify your identity.",
            img: "https://t4.ftcdn.net/jpg/04/57/65/97/360_F_457659740_n4p9XApZmW1igZPqkB4aHcW3GYp3cL6s.jpg",
        },
        {
            _id: 2,
            name: "Set up your Transfer",
            description:
                "select the option for making a payment. Follow the instructions on screen to enter the correct details",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT27Epju3kM1qQFdMdWkRYqDtMrBiu_2kv8A&usqp=CAU",
        },
        {
            _id: 3,
            name: "Make your Payment",
            description:
                "You can pay with cash, a check, a wire transfer, a credit card, a debit card, or even cryptocurrency and follow the instructions on screen ",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ89kujS5TxUhlq6myVb88XxJTW4rLGE_mNA&usqp=CAU",
        },
        {
            _id: 4,
            name: "Enjoy your Service",
            description:
                "We inform you when the money has been sent and you can also Enjoy this Service",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjuwy8WkcGgEuJ8I9QIqYBu135_VxnQ5_2gv6wtmdLrkO78KTYr-88q13pmgn4RIjB9Q&usqp=CAU",
        },
    ];

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

                {/* processingCard?.map((pCard) => (
                    <ProcessCard key={pCard._id} pCard={pCard}></ProcessCard>
                )) */}
            </div>
        </div>
    );
};

export default Processing;
