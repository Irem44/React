import { configureStore } from "@reduxjs/toolkit";
import coffee from "../Redux/CoffeeSlice";

export default configureStore({
  reducer: {
    coffee: coffee,
  },
});
