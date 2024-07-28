import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductState = {
  category: string;
  productsPerPage: number;
  totalProducts: number;
};

const initialState: ProductState = {
  category: "default",
  productsPerPage: 16,
  totalProducts: 0,
};

const filterShopSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    addProductsPerPage: (state, action: PayloadAction<number>) => {
      state.productsPerPage = action.payload;
    },
    addTotalProducts: (state, action: PayloadAction<number>) => {
      state.totalProducts = action.payload;
    },
  },
});

export const { addCategory, addProductsPerPage, addTotalProducts } =
  filterShopSlice.actions;
export default filterShopSlice.reducer;
