import { useEffect, useState } from "react";

import "./App.css";
import RouterConfig from "./Router/RouterConfig";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import {
  getAiringToday,
  getNowPlaying,
  getOnTheAir,
  getTopRatedMovie,
  getTopRatedTvSeries,
  getTrendMovie,
  getTrendTv,
  getUpcomingMovie,
} from "./Redux/MovieSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovie());
    dispatch(getTopRatedTvSeries());
    dispatch(getTrendTv());
    dispatch(getAiringToday());
    dispatch(getOnTheAir());
    dispatch(getTrendMovie());
    dispatch(getUpcomingMovie());
    dispatch(getNowPlaying());
  }, []);

  return (
    <div>
      <RouterConfig />
    </div>
  );
}

export default App;
