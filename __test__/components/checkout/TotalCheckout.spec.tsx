import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import TotalCheckout from "../../../src/components/checkout/TotalCheckout";
import { mockCart } from "../../mocks/customMocks";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("<TotalCheckout />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      cart: { products: mockCart },
    });

    return render(
      <Provider store={store}>
        <TotalCheckout />
      </Provider>
    );
  };

  it("Should render TotalCheckout", () => {
    renderComponentMock();

    expect(screen.getByRole("heading", { name: "Product" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Subtotal" })).toBeVisible();

    mockCart.forEach((product) => {
      const price =
        product.salePrice > 0 ? product.salePrice : product.normalPrice;
      expect(screen.getByText(product.title)).toBeVisible();
      expect(screen.getByText(`Rp. ${price * product.quantity}`)).toBeVisible();
    });

    const total = screen.getAllByText("Rp. 70.55");
    total.forEach((item) => {
      expect(item).toBeVisible();
    });
  });
});
