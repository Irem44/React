import React from "react";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import CardTv from "../components/CardTv";

function Diziler() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { trendTv, airingToday, onTheAir } = useSelector(
    (store) => store.movie
  );
  return (
    <div className="welcome">
      <Navbar />
      <h1 className="text-[#4f93f2] text-2xl mt-8 mb-2 font-bold ms-6">
        Trend Tv Series
      </h1>
      <Slider {...settings} className="mt-10 slider flex-row ms-4 ">
        {trendTv &&
          trendTv.map((trend) => {
            const trendGorsel = trend.backdrop_path;
            const img_url = "https://image.tmdb.org/t/p/w500";
            return (
              <div className="relative ">
                <img
                  src={`${img_url}${trendGorsel}`}
                  className="rounded-md cursor-pointer"
                />
                <p className="absolute top-56 left-2 text-white text-lg">
                  {trend.name}
                </p>
                <p className="absolute top-64 left-2  text-[#FFC55A] ">
                  {trend.first_air_date.substring(0, 4)}
                </p>
                <button className="absolute top-5 left-5  w-16 h-16 bg-[#FFC55A] rounded-full ">
                  Film Detayı
                </button>
              </div>
            );
          })}
      </Slider>
      <h1 className="text-[#4f93f2] text-2xl mt-10 mb-2 font-bold ms-6">
        Bugün Yayınlananlar
      </h1>
      <div className=" grid grid-cols-4 gap-8   p-5  mt-5 ">
        {airingToday &&
          airingToday.map((airing) => (
            <CardTv
              key={airing.id}
              name={airing.name}
              image={airing.backdrop_path}
              date={airing.first_air_date}
              vote={airing.vote_average}
            />
          ))}
      </div>
      <h1 className="text-[#4f93f2] text-2xl mt-10 mb-2 font-bold ms-6">
        Yayında Olanlar
      </h1>
      <div className=" grid grid-cols-4 gap-8   p-5  mt-5 ">
        {onTheAir &&
          onTheAir.map((airing) => (
            <CardTv
              key={airing.id}
              name={airing.name}
              image={airing.backdrop_path}
              date={airing.first_air_date}
              vote={airing.vote_average}
            />
          ))}
      </div>
    </div>
  );
}

export default Diziler;
