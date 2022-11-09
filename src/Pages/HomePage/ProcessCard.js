import React from "react";

const ProcessCard = ({ pCard }) => {
    const { img, name, description } = pCard;
    return (
        <div class="card w-72 h-52 p-6 rounded-lg shadow-xl shadow-green-900 bg-green-50 flex flex-col justify-center items-center">
            <img className="w-20" h-20 src={img} alt="" />
            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>
            <div class="mt-1">{ description}</div>
        </div>
        
        
    );
};

export default ProcessCard;
