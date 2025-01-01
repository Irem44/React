import React from "react";

function MovieProfile({ name, img, character }) {
  return (
    <div className=" rounded-full flex-column">
      <img src={img} className=" w-64 h-64 rounded-full" />
      <p className="text-lg text-white mt-4 mb-2">{name}</p>
      <p className="text-lg text-[#FFC55A]">{character}</p>
    </div>
  );
}

export default MovieProfile;
