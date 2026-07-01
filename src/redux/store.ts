import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/Product.slice";
import CartReducer from "./slices/Cart.slice";

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
  },
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
