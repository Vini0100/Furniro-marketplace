import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MainProduct from "../../../../src/components/shop/shopProduct/MainProduct";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";

const mockStore = configureStore([]);

describe("<MainProduct />", () => {
  const renderComponent = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <MainProduct />
      </Provider>
    );
  };

  it("should render the MainProduct component correctly", () => {
    renderComponent();

    expect(screen.getByAltText("main image")).toBeVisible();

    mockProductQuantity.images.gallery.forEach((img, index) => {
      expect(screen.getByAltText(`image ${index}`)).toBeVisible();
    });

    expect(
      screen.getByText(
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."
      )
    ).toBeVisible();

    expect(screen.getByText("Size")).toBeVisible();

    expect(screen.getByRole("heading", { name: "Color" })).toBeVisible();

    mockProductQuantity.colors.forEach((color) => {
      const colorElement = screen.getByTitle(color.name);
      expect(colorElement).toHaveStyle(`background-color: ${color.hex}`);
    });

    expect(screen.getByRole("button", { name: "Add To Cart" })).toBeVisible();

    expect(
      screen.getByText(`: ${mockProductQuantity.tags.join(", ")}`)
    ).toBeVisible();
  });
});
