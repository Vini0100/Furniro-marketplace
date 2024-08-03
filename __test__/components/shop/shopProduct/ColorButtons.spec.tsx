import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ColorButtons from "../../../../src/components/shop/shopProduct/ColorButtons";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";

const mockStore = configureStore([]);

describe("<ColorButtons />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <ColorButtons />
      </Provider>
    );
  };

  it("Should render ColorButtons", () => {
    renderComponentMock();
    expect(screen.getByRole("heading", { name: "Color" })).toBeVisible();
    mockProductQuantity?.colors.forEach((color) => {
      const colorContainer = screen.getByTitle(color.name);
      expect(colorContainer).toHaveStyle(`background-color: ${color.hex}`);
    });
  });
});
