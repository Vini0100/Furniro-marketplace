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
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          }
          return product;
        });
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<ProductWithQuantity>
    ) => {
      const index = state.products.findIndex(
        (product) => product.sku === action.payload.sku
      );
      if (index !== -1) {
        state.products[index].quantity = action.payload.quantity;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.sku !== action.payload
      );
    },
    resetProductFromCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
  resetProductFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
