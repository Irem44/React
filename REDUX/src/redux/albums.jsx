import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//albumden gelecekleri tutan boş bir state tanımladık
const initialState = {
  albums: [],
};

export const album = createAsyncThunk("albums", async () => {
  const request = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  console.log(request.data);
  return request.data;
});

export const albumsSlice = createSlice({
  name: "albums",
  initialState,

  reducers: {
    //HTTP istekleri dışındaki fonksiyonlar için
  },
  //   extraReducers: {
  //     //HTTP istekleri ile ilgili olan fonksiyonlar için
  //   },
});

//dışarıya export ettik slice'ı

export const {} = albumsSlice.actions;
export default albumsSlice.reducer;
