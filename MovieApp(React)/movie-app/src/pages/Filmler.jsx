import React from "react";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function Filmler() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { trendMovie, upcomingMovie, nowPlayMovies } = useSelector(
    (store) => store.movie
  );

  const navigate = useNavigate();
  return (
    <div className="welcome">
      <Navbar />
      <h1 className="text-[#4f93f2] text-2xl mt-8 mb-2 font-bold ms-6">
        Trend Tv Movies
      </h1>
      <Slider {...settings} className="mt-10 slider flex-row ms-4 ">
        {trendMovie &&
          trendMovie.map((trend) => {
            const trendGorsel = trend.backdrop_path;
            const img_url = "https://image.tmdb.org/t/p/w500";
            return (
              <div className="relative ">
                <img
                  src={`${img_url}${trendGorsel}`}
                  className="rounded-md cursor-pointer"
                />
                <p className="absolute top-56 left-2 text-white text-lg">
                  {trend.title}
                </p>
                <p className="absolute top-64 left-2  text-[#FFC55A] ">
                  {trend.release_date.substring(0, 4)}
                </p>
                <button
                  className="absolute top-5 left-5  w-16 h-16 bg-[#FFC55A] rounded-full "
                  onClick={() => {
                    navigate(`/detay/${trend.id}`);
                  }}
                >
                  Film Detayı
                </button>
              </div>
            );
          })}
      </Slider>
      <h1 className="text-[#4f93f2] text-2xl mt-10 mb-2 font-bold ms-6">
        Yakında Gelecek Filmler
      </h1>
      <div className=" grid grid-cols-4 gap-8   p-5  mt-5 ">
        {upcomingMovie &&
          upcomingMovie.map((upcoming) => (
            <Card
              key={upcoming.id}
              title={upcoming.title}
              image={upcoming.backdrop_path}
              date={upcoming.release_date}
              vote={upcoming.vote_average}
            />
          ))}
      </div>
      <h1 className="text-[#4f93f2] text-2xl mt-10 mb-2 font-bold ms-6">
        Şuan Gösterimde Olanlar
      </h1>
      <div className=" grid grid-cols-4 gap-8   p-5  mt-5 ">
        {nowPlayMovies &&
          nowPlayMovies.map((now) => (
            <Card
              key={now.id}
              title={now.title}
              image={now.backdrop_path}
              date={now.release_date}
              vote={now.vote_average}
            />
          ))}
      </div>
    </div>
  );
}

export default Filmler;
