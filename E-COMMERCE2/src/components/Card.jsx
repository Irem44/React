import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { basket, say, totalPrice } from "../Redux/ProductsSlice";
import Navbar from "../components/Navbar";

function Card({ image, description, price, id }) {
  const dispatch = useDispatch();
  <Navbar image={image} description={description} price={price} id={id} />;
  const ekle = () => {
    dispatch(basket(id));
    dispatch(totalPrice());
    dispatch(say());
  };

  return (
    <div className="flex-column card ">
      <div className="w-44  p-3">
        <div className="w-40 h-28 ">
          <img class=" rounded-lg w-full h-full" src={image} />
        </div>

        <p className="w-48 h-36 mt-4">{description}</p>
        <div className="flex-column space-y-3">
          <p className="text-red-700 w-32">{price} ₺</p>

          <button className="sepeteEkle" type="button" onClick={ekle}>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
