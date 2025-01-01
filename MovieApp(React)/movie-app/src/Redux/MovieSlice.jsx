import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  topRatedMovies: [],
  topRatedTvSeries: [],
  trendTv: [],
  airingToday: [],
  onTheAir: [],
  trendMovie: [],
  upcomingMovie: [],
  nowPlayMovies: [],
  movieActrist: [],
};

const url = "https://api.themoviedb.org/3/movie/top_rated";
const api_key = "4f51e9a400c4ceaa0a2ac7ef6585ec4c";
const urlTv = "https://api.themoviedb.org/3/tv/top_rated";
const trendUrl = "https://api.themoviedb.org/3/trending/tv/day";
const airingToday = "https://api.themoviedb.org/3/tv/airing_today";
const trendMovieUrl = "https://api.themoviedb.org/3/trending/movie/day";

const onTheAirUrl = "https://api.themoviedb.org/3/tv/on_the_air";
const upcomingMv = "https://api.themoviedb.org/3/movie/upcoming";
const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing";

const actristMovie = "https://api.themoviedb.org/3/movie/";
export const getTopRatedMovie = createAsyncThunk(
  "getTopRatedMovie",
  async () => {
    const topRated = await axios.get(
      `${url}?api_key=${api_key}&language=en-US&page=1`
    );
    console.log(topRated);
    return topRated.data;
  }
);

export const getTopRatedTvSeries = createAsyncThunk(
  "getTopRatedTvSeries",
  async () => {
    const topTv = await axios.get(
      `${urlTv}?api_key=${api_key}&language=en-US&page=1`
    );

    console.log(topTv);
    return topTv.data;
  }
);

export const getTrendTv = createAsyncThunk("getTrendTv", async () => {
  const trend = await axios.get(
    `${trendUrl}?api_key=${api_key}&language=en-US`
  );
  console.log(trend);
  return trend.data;
});

export const getAiringToday = createAsyncThunk("getAiringToday", async () => {
  const airing = await axios.get(
    `${airingToday}?api_key=${api_key}&language=en-US&page=1`
  );
  console.log(airing);
  return airing.data;
});

export const getOnTheAir = createAsyncThunk("getOnTheAir", async () => {
  const onAir = await axios.get(
    `${onTheAirUrl}?api_key=${api_key}&language=en-US&page=1`
  );
  return onAir.data;
});

export const getTrendMovie = createAsyncThunk("getTrendMovie", async () => {
  const trendMovie = await axios.get(
    `${trendMovieUrl}?api_key=${api_key}&language=en-US`
  );

  return trendMovie.data;
});
export const getUpcomingMovie = createAsyncThunk(
  "getUpcomingMovie",
  async () => {
    const upcoming = await axios.get(
      `${upcomingMv}?api_key=${api_key}&language=en-US&page=1`
    );
    return upcoming.data;
  }
);

export const getNowPlaying = createAsyncThunk("getNowPlaying", async () => {
  const nowPlay = await axios.get(
    `${nowPlaying}?api_key=${api_key}&language=en-US&page=1`
  );
  console.log(nowPlay);
  return nowPlay.data;
});

// export const getMovieActrist=createAsyncThunk("getMovieActrist",async()=>{
//   const actrist=await axios.get(`${actristMovie}`)
// })

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopRatedMovie.fulfilled, (state, action) => {
      state.topRatedMovies = action.payload.results;
    });
    builder.addCase(getTopRatedTvSeries.fulfilled, (state, action) => {
      state.topRatedTvSeries = action.payload.results;
    });
    builder.addCase(getTrendTv.fulfilled, (state, action) => {
      state.trendTv = action.payload.results;
    });
    builder.addCase(getAiringToday.fulfilled, (state, action) => {
      state.airingToday = action.payload.results;
    });
    builder.addCase(getOnTheAir.fulfilled, (state, action) => {
      state.onTheAir = action.payload.results;
    });
    builder.addCase(getTrendMovie.fulfilled, (state, action) => {
      state.trendMovie = action.payload.results;
    });
    builder.addCase(getUpcomingMovie.fulfilled, (state, action) => {
      state.upcomingMovie = action.payload.results;
    });
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      state.nowPlayMovies = action.payload.results;
    });
  },
});

export const {} = MovieSlice.actions;
export default MovieSlice.reducer;
