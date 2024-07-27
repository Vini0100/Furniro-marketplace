import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import productDetailReducer from "./features/products/productDetailsSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
