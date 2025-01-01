import React from "react";
import "../css/cards.css";

function Cards({ data }) {
  const { id, word, turkish_mean, image } = data;
  return (
    <div className="cards">
      <img src={image} width={150} height={150} />
      <h3>{word}</h3>
      <p>{turkish_mean}</p>
    </div>
  );
}

export default Cards;
