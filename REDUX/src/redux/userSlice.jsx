import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    //HTTP isteği olmazsa kullanılır
  },
  extraReducers: (builder) => {
    //HTTP isteklerinde kullanılır

    //fonskisyon bir yerde çağrıldıysa başarılı şekilde çalıştığında sen çalış.FOnksiyondan dönen değer actiona oturur
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
