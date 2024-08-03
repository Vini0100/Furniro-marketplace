import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DescriptionProduct from "../../../../src/components/shop/shopProduct/DescriptionProduct";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";

const mockStore = configureStore([]);

describe("<DescriptionProduct />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <DescriptionProduct />
      </Provider>
    );
  };

  it("Should render product title", () => {
    renderComponentMock();
    expect(
      screen.getByRole("heading", { name: mockProductQuantity?.title })
    ).toBeVisible();
  });

  it("Should render correct product price", () => {
    renderComponentMock();
    expect(
      screen.getByText(
        `Rp. ${mockProductQuantity.salePrice.toLocaleString("en-US")}`
      )
    ).toBeVisible();
  });

  it("Should render product description", () => {
    renderComponentMock();
    expect(
      screen.getByText(
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."
      )
    ).toBeVisible();
  });
});
