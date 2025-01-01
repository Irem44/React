import React from "react";

function CardTv({ name, image, date, vote }) {
  const img_url = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="relative card flex flex-col p-2 h-80 welcome ">
      <div className="golge"></div>
      <img src={`${img_url}${image}`} className="h-full w-full rounded-lg " />
      <p
        className="film-adi absolute top-64
       left-5  text-white  "
      >
        {name}
      </p>
      <p className="absolute tarih left-5 text-lg text-[#FFC55A] ">
        {date.substring(0, 4)}
      </p>
      <p className="absolute tarih left-72 text-lg text-[#FFC55A] ">
        {vote.toFixed(1)}
      </p>
      <button className="absolute top-5 left-64 w-16 h-16  bg-[#FFC55A] rounded-full ">
        Film Detayı
      </button>
    </div>
  );
}

export default CardTv;
