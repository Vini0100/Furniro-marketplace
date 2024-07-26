import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../../types/product";

export type ProductState = {
  products: product[];
};

const initialState: ProductState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<product[]>) => {
      state.products.push(...action.payload);
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
