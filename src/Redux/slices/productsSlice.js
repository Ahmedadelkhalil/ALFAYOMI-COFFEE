import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Ahmedadelkhalil/ALFAYOMI-COFFEE/refs/heads/master/src/assets/data/productsData.json",
      {
        method: "GET",
      },
    );
    const data = response.json();
    return data;
  },
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const productsDataSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "Succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default productsDataSlice.reducer;
