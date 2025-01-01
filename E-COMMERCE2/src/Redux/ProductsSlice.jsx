import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

export const getFromStTotalStorage = () => {
  if (localStorage.getItem("total")) {
    return JSON.parse(localStorage.getItem("total"));
  }
  return [];
};
const initialState = {
  datas: [],
  basket: getBasketFromStorage(),
  total: getFromStTotalStorage(),
  sayac: getBasketFromStorage().length,
};

export const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};
export const writeFromTotalToStorage = (total) => {
  localStorage.setItem("total", JSON.stringify(total));
};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const query = await axios.get("https://fakestoreapi.com/products");

  return query.data;
});

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    basket: (state, action) => {
      const query =
        state.datas && state.datas.find((data) => data.id === action.payload);
      const query2 =
        state.basket && state.basket.find((bs) => bs.id === action.payload);

      if (query) {
        if (query2) {
          query2.quantity += 1;
          // alert("Ürün sepetinizde mevcuttur.");
        } else {
          /**************/
          state.basket = [...state.basket, { ...query, quantity: 1 }];
          writeFromBasketToStorage(state.basket);
        }
      }
    },
    arttir: (state, action) => {
      const query2 =
        state.basket && state.basket.find((bs) => bs.id === action.payload);
      if (query2) {
        query2.quantity += 1;
      }
      writeFromBasketToStorage(state.basket);
    },
    azalt: (state, action) => {
      const query2 =
        state.basket && state.basket.find((bs) => bs.id === action.payload);
      if (query2) {
        if (query2.quantity > 0) {
          query2.quantity -= 1;
        }
      }
      writeFromBasketToStorage(state.basket);
    },
    deleted: (state, action) => {
      const query =
        state.basket && state.basket.filter((bs) => bs.id !== action.payload);

      state.basket = [...query];
      writeFromBasketToStorage(state.basket);
    },
    totalPrice: (state) => {
      state.total = 0;
      state.basket &&
        state.basket.map((bs) => (state.total += bs.price * bs.quantity));
      writeFromTotalToStorage(state.total);
    },
    say: (state) => {
      state.sayac = state.basket ? state.basket.length : 0;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.datas = action.payload;
    });
  },
});

export const { basket, arttir, azalt, deleted, totalPrice, say } =
  ProductSlice.actions;

export default ProductSlice.reducer;
