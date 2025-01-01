import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotCoffees: [],
  iceCoffees: [],
};

export const getAllHotCoffee = createAsyncThunk("getAllHotCoffee", async () => {
  const hotCoffee = await axios.get("https://api.sampleapis.com/coffee/hot");
  console.log(hotCoffee);
  return hotCoffee.data;
});

export const getAllIceCoffee = createAsyncThunk("getAllIceCoffee", async () => {
  const iceCoffee = await axios.get("https://api.sampleapis.com/coffee/iced");
  console.log(iceCoffee);
  return iceCoffee.data;
});

export const CoffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllHotCoffee.fulfilled, (state, action) => {
      state.hotCoffees = action.payload;
    });
    builder.addCase(getAllIceCoffee.fulfilled, (state, action) => {
      state.iceCoffees = action.payload;
    });
  },
});

export const {} = CoffeeSlice.actions;

export default CoffeeSlice.reducer;
