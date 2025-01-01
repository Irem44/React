import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import CardTv from "../components/CardTv";

function Welcome() {
  const { topRatedMovies, topRatedTvSeries } = useSelector(
    (store) => store.movie
  );
  return (
    <div className="p-10  ">
      <h1 className="text-[#FFC55A] text-2xl mt-6 mb-6 font-bold">
        Top Rated Movies
      </h1>
      <div className=" grid grid-cols-4 gap-8 h-full ">
        {topRatedMovies &&
          topRatedMovies.map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              image={movie.backdrop_path}
              date={movie.release_date}
              vote={movie.vote_average}
            />
          ))}
      </div>
      <h1 className="text-[#FFC55A] text-2xl mt-8 mb-8 font-bold">
        Top Rated Tv Series
      </h1>
      <div className=" grid grid-cols-4 gap-8 h-full ">
        {topRatedTvSeries &&
          topRatedTvSeries.map((tv) => (
            <CardTv
              key={tv.id}
              name={tv.name}
              image={tv.backdrop_path}
              date={tv.first_air_date}
              vote={tv.vote_average}
            />
          ))}
      </div>
    </div>
  );
}

export default Welcome;
