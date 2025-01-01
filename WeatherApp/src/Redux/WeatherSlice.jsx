import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import WeatherCity from "../components/WeatherCity";

const initialState = {
  name: "",
  description: "",
  degree: "",
};

const url = "https://api.openweathermap.org/data/2.5/";
const apikey = "aee9368ab4b3e538bec75d39005eccf3";

export const getWeather = createAsyncThunk("getWeather", async (city) => {
  const query = await axios.get(
    `${url}weather?q=${city}&appid=${apikey}&units=metric&lang=tr`
  );
  return query.data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.description = action.payload.weather[0].description;
      state.degree = action.payload.main.temp;
    });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
