import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductWithQuantity } from "../../../types/product";

export type ProductState = {
  products: ProductWithQuantity[];
};

const initialState: ProductState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      action.payload.forEach((product) => {
        state.products.push({ ...product, quantity: 1 });
      });
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
