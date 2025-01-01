import React from "react";
import Icindekiler from "./Icindekiler";
import { useNavigate } from "react-router-dom";

function Card({ title, image, ingredients, id }) {
  const navigate = useNavigate();
  return (
    <div className="flex-column card">
      <img src={image} className="w-32 h-32 rounded-full" />
      <span className="my-2 text-[#82593a]">{title}</span>
      <button
        className="icindekiler mt-2"
        onClick={() => navigate(`details/${id}`)}
      >
        İçindekiler
      </button>
    </div>
  );
}

export default Card;
