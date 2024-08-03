import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ImagesProduct from "../../../../src/components/shop/shopProduct/ImagesProduct";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";

const mockStore = configureStore([]);

describe("<ImagesProduct />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <ImagesProduct />
      </Provider>
    );
  };

  it("Should render ImagesProduct", () => {
    renderComponentMock();
    expect(screen.getByAltText("main image")).toBeVisible();
    mockProductQuantity.images.gallery.forEach((img, index) => {
      expect(screen.getByAltText(`image ${index}`)).toBeVisible();
    });
  });

  it("Should change main image on thumbnail click", () => {
    renderComponentMock();
    const thumbnail = screen.getByAltText("image 0");
    fireEvent.click(thumbnail);
    expect(screen.getByAltText("main image")).toHaveAttribute(
      "src",
      mockProductQuantity.images.gallery[0]
    );
  });
});
