import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import productDetailReducer from "./features/products/productDetailsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetail: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
