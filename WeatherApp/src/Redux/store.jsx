import { configureStore } from "@reduxjs/toolkit";
import weather from "../Redux/WeatherSlice";

export default configureStore({
  reducer: {
    weather: weather,
  },
});
