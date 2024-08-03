import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import InformationProduct from "../../../../src/components/shop/shopProduct/InformationProduct";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";

const mockStore = configureStore([]);

describe("<InformationProduct />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <InformationProduct />
      </Provider>
    );
  };

  it("Should render InformationProduct", () => {
    renderComponentMock();
    expect(screen.getByText("Description")).toBeVisible();
    expect(screen.getByText("Additional Information")).toBeVisible();
    expect(
      screen.getByText(
        "Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road."
      )
    ).toBeVisible();
    expect(screen.getByAltText("Image 1")).toBeVisible();
    expect(screen.getByAltText("Image 2")).toBeVisible();
  });
});
