import React from "react";
import ProductButton from "../Button/Button.jsx";
import BestSellerLabel from "../Label/BestSellerLabel";
import Rating from "../Label/Rating";

const Card = ({ card }) => {
  return (
    <article className="flex flex-col gap-2 text-center p-4 bg-white rounded-lg cursor-pointer relative max-w-xs hover:shadow-lg my-2 transform transition-transform duration-300 hover:scale-105">
      <div className="w-full h-40 flex justify-center items-center mb-2 overflow-hidden rounded-lg relative">
        <BestSellerLabel rating={card.rating} count={card.rating_count} />
        <img
          className="max-w-full max-h-full object-cover"
          src={card.attr_whitegold_platinum_round_default_img}
          alt={card.prod_name}
        />
      </div>
      <div className="flex flex-col gap-2 text-center pb-4">
        <span className="font-bold text-lg text-black line-clamp-2">
          {card.prod_name}
        </span>
        <div className="flex gap-1 justify-center items-center text-gray-600">
          <Rating rating={card.rating} />
          <span>({card.rating_count})</span>
        </div>
        <span className="text-lg text-gray-800">${card.attr_14k_regular}</span>
        <ProductButton />
      </div>
    </article>
  );
};

export default Card;
