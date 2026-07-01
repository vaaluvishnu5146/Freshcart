import { createSlice } from "@reduxjs/toolkit";
import type { Cart } from "../../types/ContextTypes";

const state: { data: Cart[] } = {
  data: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: state,
  reducers: {
    addItemToCart(state, action) {
      const cartItem = { ...action.payload, quantity: 1 };
      state.data.push(cartItem);
    },
    quantityIncrement(state, action) {
      state.data = [...state.data].map((e) => {
        if (e.id === action.payload) {
          e.quantity += 1;
        }
        return e;
      });
    },
    quantityDecrement(state, action) {
      state.data = [...state.data].map((e) => {
        if (e.id === action.payload) {
          e.quantity -= 1;
        }
        return e;
      });
    },
  },
});

export const { addItemToCart, quantityIncrement, quantityDecrement } =
  CartSlice.actions;

export default CartSlice.reducer;
