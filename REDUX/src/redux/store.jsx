import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import userReducer from "../redux/userSlice";
import postReducer from "../redux/post";
import albumsSlice from "../redux/albums";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    posts: postReducer,
    albums: albumsSlice,
  },
});
