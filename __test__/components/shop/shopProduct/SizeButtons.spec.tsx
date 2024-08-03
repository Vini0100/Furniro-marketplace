import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SizeButtons from "../../../../src/components/shop/shopProduct/SizeButtons";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";

const mockStore = configureStore([]);

describe("<SizeButtons />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <SizeButtons />
      </Provider>
    );
  };

  it("Should render SizeButtons component", () => {
    renderComponentMock();

    expect(screen.getByText("Size")).toBeVisible();
  });

  it("Should display size buttons based on product sizes", () => {
    renderComponentMock();
    const sizes = mockProductQuantity?.sizes || [];
    sizes.forEach((size) => {
      expect(screen.getByText(size)).toBeVisible();
    });
  });

  it("Should apply selected style to the selected size button", () => {
    renderComponentMock();
    const sizes = mockProductQuantity?.sizes || [];
    sizes.forEach((size) => {
      const button = screen.getByText(size);
      expect(button).toHaveClass(
        size === sizes[0] ? "bg-customGold" : "bg-gray-300"
      );
    });
  });

  it("Should update selected size on button click", () => {
    renderComponentMock();
    const sizes = mockProductQuantity?.sizes || [];
    const buttons = sizes.map((size) => screen.getByText(size));

    fireEvent.click(buttons[1]);

    expect(buttons[1]).toHaveClass("bg-customGold");
    expect(buttons[0]).toHaveClass("bg-gray-300");
  });
});
