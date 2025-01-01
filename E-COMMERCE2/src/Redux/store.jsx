import { configureStore } from "@reduxjs/toolkit";
import Product from "../Redux/ProductsSlice";

export default configureStore({
  reducer: {
    Product: Product,
  },
});
