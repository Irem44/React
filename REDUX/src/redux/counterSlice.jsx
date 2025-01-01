import { createSlice } from "@reduxjs/toolkit";

//state tanımlama
const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  //buraya fonksiyon eklenebilir
  reducers: {
    //state burada aslında initialState'e ulaşabilen bir objedir
    arttır: (state) => {
      state.value = state.value + 1;
    },
    azalt: (state) => {
      if (state.value > 0) {
        state.value = state.value - 1;
      }
    },
  },
});

//buraya yazdığımız fonksiyonları ekleyebiliriz
export const { arttır, azalt } = counterSlice.actions;

export default counterSlice.reducer;
