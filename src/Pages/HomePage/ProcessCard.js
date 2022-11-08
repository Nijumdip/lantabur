import React from "react";

const ProcessCard = ({ pCard }) => {
    const [img, name] = pCard;
    return (
        <div class="relative mr-2 mt-96 ">
            <div class="bg-green-50 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <img className="w-20" h-20 src={img} alt="" />
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>
                <div class="mt-1">
                    Simply sign up online for free <br /> and verify your identity.
                </div>
            </div>
        </div>
    );
};

export default ProcessCard;
