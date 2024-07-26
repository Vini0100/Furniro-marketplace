import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductWithQuantity } from "../../../types/product";

export type ProductState = {
  products: ProductWithQuantity[];
};

const initialState: ProductState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductWithQuantity>) => {
      const existingProduct = state.products.find(
        (product) => product.sku === action.payload.sku
      );

      if (existingProduct) {
        state.products = state.products.map((product) => {
          if (product.sku === existingProduct.sku) {
            const currentQuantity = product.quantity ?? 0;
            return {
              ...product,
              quantity: currentQuantity + (action.payload.quantity ?? 1),
            };
          }
          return product;
        });
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.sku !== action.payload
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
