import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../../types/ApiInterfaces";
import axios from "axios";

const state: { data: Product[] } = {
  data: [],
};

export const saveProductsThunk = createAsyncThunk(
  "products/saveProducts",
  async () => {
    try {
      const response = await axios.get(`http://localhost:5173/products.json`);
      if (response && response.status === 200) {
        return response.data.products;
      }
    } catch (error) {
      return error;
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: state,
  reducers: {
    saveProducts(state, action) {
      state.data.push(...action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(saveProductsThunk.pending, (state, action) => {
      console.log("Pending", state, action);
    });
    builder.addCase(saveProductsThunk.fulfilled, (state, action) => {
      console.log("Fullfilled", state, action);
      state.data.push(...action.payload);
    });
    builder.addCase(saveProductsThunk.rejected, (state, action) => {
      console.log("Rejected", state, action);
    });
  },
});

export const { saveProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
