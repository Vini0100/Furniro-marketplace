import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AddToCart from "../../../../src/components/shop/shopProduct/AddToCart";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";

const mockStore = configureStore([]);

describe("<AddToCart />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <AddToCart />
      </Provider>
    );
  };

  it("Should render AddToCart component", () => {
    renderComponentMock();
    expect(screen.getByRole("button", { name: "-" })).toBeVisible();
    expect(screen.getByText(mockProductQuantity.quantity)).toBeVisible();
    expect(screen.getByRole("button", { name: "+" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Add To Cart" })).toBeVisible();
  });
});
