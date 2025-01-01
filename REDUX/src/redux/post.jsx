import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

export const getPost = createAsyncThunk("posts", async () => {
  const request = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return request.data;
});
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    //HTTP istekleri dışındaki fonksiyonlar için
  },

  extraReducers: (builder) => {
    //HTTP istekleriyle ilgili fonksiyonlar için
    builder.addCase(getPost.fulfilled, (state, actions) => {
      state.posts = actions.payload;
    });
  },
});
export const {} = postSlice.actions;
export default postSlice.reducer;
