import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieProfile from "../components/MovieProfile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieSimilarCard from "../components/MovieSimilarCard";

function MovieDetails() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const { id } = useParams();
  const base_url = "https://api.themoviedb.org/3/movie/";

  const api_key = "4f51e9a400c4ceaa0a2ac7ef6585ec4c";
  const img_url = "https://image.tmdb.org/t/p/w500";

  const [movieActrist, setMovieActrist] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const movieActrist = async () => {
      const actrist = await axios.get(
        `${base_url}${id}/credits?api_key=${api_key}&language=en-US`
      );

      setMovieActrist(actrist.data.cast);
    };
    const movieSimilar = async () => {
      const similar = await axios.get(
        `${base_url}${id}/similar?api_key=${api_key}&language=en-US&page=1`
      );
      console.log(similar.data.results);
      setSimilarMovie(similar.data.results);
    };
    movieActrist();
    movieSimilar();
  }, [id]);
  return (
    <div className="welcome">
      <Navbar />
      <h1 className="text-[#4f93f2] text-2xl mt-8 mb-2 font-bold ms-6">
        Oyuncular
      </h1>
      <Slider {...settings} className=" profile next prev p-4 ">
        {movieActrist &&
          movieActrist.map((act) => (
            <MovieProfile
              key={act.id}
              name={act.name}
              img={`${img_url}${act.profile_path}`}
              character={act.character}
            />
          ))}
      </Slider>
      <h1 className="text-[#4f93f2] text-2xl mt-14 mb-2 font-bold ms-6">
        Benzer Filmler
      </h1>
      <div className="mt-10">
        <Slider {...settings} className="profile">
          {similarMovie &&
            similarMovie.map((similar) => {
              return (
                <div>
                  <MovieSimilarCard
                    name={similar.title}
                    img={`${img_url}${similar.poster_path}`}
                    date={similar.release_date.substring(0, 4)}
                    vote={similar.vote_average.toFixed(2)}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

export default MovieDetails;
