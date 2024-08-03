import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DetailsUlProduct from "../../../../src/components/shop/shopProduct/DetailsUlProduct";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockProductQuantity } from "../../../mocks/customMocks";

const mockStore = configureStore([]);

describe("<DetailsUlProduct />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <DetailsUlProduct />
      </Provider>
    );
  };

  it("Should render SKU", () => {
    renderComponentMock();
    expect(screen.getByText(`: ${mockProductQuantity.sku}`)).toBeVisible();
  });

  it("Should render Category", () => {
    renderComponentMock();
    expect(screen.getByText(`: ${mockProductQuantity.category}`)).toBeVisible();
  });

  it("Should render Tags", () => {
    renderComponentMock();
    expect(
      screen.getByText(`: ${mockProductQuantity.tags.join(", ")}`)
    ).toBeVisible();
  });

  it("Should render social media icons and handle clicks", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => {
      return {} as Window;
    });

    renderComponentMock();

    fireEvent.click(screen.getByLabelText("facebook"));
    expect(openSpy).toHaveBeenCalledWith("https://www.facebook.com/");

    fireEvent.click(screen.getByLabelText("linkedin"));
    expect(openSpy).toHaveBeenCalledWith("https://www.linkedin.com/");

    fireEvent.click(screen.getByLabelText("twitter"));
    expect(openSpy).toHaveBeenCalledWith("https://www.twitter.com/");

    openSpy.mockRestore();
  });
});
