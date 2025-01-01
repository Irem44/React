import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);

  return response.data;
});

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    searched: (state, action) => {
      const searchTerm =
        action.payload && typeof action.payload === "string"
          ? action.payload.trim().toLowerCase()
          : "";
      const data = (state.products = state.products.filter(
        (product) => product.title.trim().toLowerCase().includes(searchTerm) // Başlıkta arama yapıyoruz
      ));
    },
  },
  extraReducers: (builder) => {
    //istek attığında hala serverdan cevapları beklediğimiz durum
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export const { setSelectedProduct, searched } = productSlice.actions;

export default productSlice.reducer;
