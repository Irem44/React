import { configureStore } from "@reduxjs/toolkit";
import movie from "../Redux/MovieSlice";

export default configureStore({
  reducer: {
    movie: movie,
  },
});
