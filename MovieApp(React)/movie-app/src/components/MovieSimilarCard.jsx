import React from "react";

function MovieSimilarCard({ name, img, date, vote }) {
  return (
    <div className="similarCard">
      <img src={img} />
      <p>{name}</p>
      <p>{date}</p>
      <p>{vote}</p>
    </div>
  );
}

export default MovieSimilarCard;
