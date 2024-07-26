import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../../types/product";

export type ProductState = {
  product: product | null;
};

const initialState: ProductState = {
  product: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<product>) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct } = productDetailSlice.actions;
export default productDetailSlice.reducer;
