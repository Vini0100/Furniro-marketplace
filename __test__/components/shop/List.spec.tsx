import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import List from "../../../src/components/shop/List";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { mockProductQuantity } from "../../mocks/customMocks";
import "@testing-library/jest-dom";
import { ProductWithQuantity } from "../../../src/types/product";

const mockStore = configureStore([]);

const arrMockProduct: ProductWithQuantity[] = [mockProductQuantity];

describe("<List />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      products: {
        products: arrMockProduct,
      },
      filterShop: {
        category: "Racks",
        productsPerPage: 16,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <List />
        </BrowserRouter>
      </Provider>
    );
  };

  it("Should render List", () => {
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
    expect(screen.getByRole("button", { name: "1" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
  });
});
