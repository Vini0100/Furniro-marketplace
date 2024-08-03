import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RelatedProducts from "../../../../src/components/shop/shopProduct/RelatedProducts";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";
import { BrowserRouter } from "react-router-dom";
import { ProductWithQuantity } from "../../../../src/types/product";

const mockStore = configureStore([]);

const arrMockProduct: ProductWithQuantity[] = [mockProductQuantity];

describe("<RelatedProducts />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
      products: {
        products: arrMockProduct,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <RelatedProducts />
        </BrowserRouter>
      </Provider>
    );
  };

  it("Should render RelatedProducts", () => {
    renderComponentMock();
    expect(screen.getByText("Related Products")).toBeVisible();
  });

  it("Should show the products", () => {
    const truncateText = (text: string, maxWords: number): string => {
      const words = text.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return text;
    };
    renderComponentMock();

    arrMockProduct.forEach((product) => {
      expect(screen.getByAltText(product.title)).toBeVisible();
      expect(
        screen.getByRole("heading", { name: product.title })
      ).toBeVisible();
      expect(
        screen.getByText(
          product.description?.short
            ? truncateText(product.description.short, 10)
            : ""
        )
      ).toBeVisible();
      if (product.new) {
        expect(screen.getByText("New")).toBeVisible();
      }
      if (product.discountPercentage > 0) {
        expect(
          screen.getByText(`-${Math.round(product.discountPercentage * 100)}%`)
        ).toBeVisible();
      }
    });
  });
});
