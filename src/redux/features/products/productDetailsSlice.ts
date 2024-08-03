import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types/product";

export type ProductState = {
  product: Product | null;
};

const initialState: ProductState = {
  product: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct } = productDetailSlice.actions;
export default productDetailSlice.reducer;
