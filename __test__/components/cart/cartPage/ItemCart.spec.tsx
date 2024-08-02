import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Provider } from "react-redux";
import ItemCart from "../../../../src/components/cart/cartPage/ItemCart";
import { mockProductQuantity } from "../../../mocks/customMocks";
import configureStore from "redux-mock-store";
import { removeProductFromCart } from "../../../../src/redux/features/cart/cartSlice";

const mockStore = configureStore([]);

describe("<ItemCart />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      cart: { products: [mockProductQuantity] },
    });

    const dispatch = vi.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <ItemCart product={mockProductQuantity} />
      </Provider>
    );

    return dispatch;
  };

  it("Should render ItemCart", () => {
    renderComponentMock();
    const image = screen.getByAltText(mockProductQuantity.title);
    const title = screen.getByText(mockProductQuantity.title);
    const price = screen.getByTestId("productPrice");
    const quantity = screen.getByText(mockProductQuantity.quantity);
    const decreaseButton = screen.getByRole("button", { name: "-" });
    const increaseButton = screen.getByRole("button", { name: "+" });
    const totalPrice = screen.getByTestId("totalPrice");
    const RemoveToCart = screen.getByTestId("removeProductsButton");

    expect(image).toBeVisible();
    expect(title).toBeVisible();
    expect(price).toBeVisible();
    expect(quantity).toBeVisible();
    expect(decreaseButton).toBeVisible();
    expect(increaseButton).toBeVisible();
    expect(totalPrice).toBeVisible();
    expect(RemoveToCart).toBeVisible();

    expect(image).toHaveAttribute("src", mockProductQuantity.images.mainImage);
    expect(price).toHaveTextContent(
      `Rs. ${mockProductQuantity.salePrice.toFixed(2)}`
    );
    expect(totalPrice).toHaveTextContent(
      `Rs. ${mockProductQuantity.salePrice.toFixed(2)}`
    );
  });

  it("should dispatch removeProductFromCart when RemoveButton is clicked", () => {
    const dispatch = renderComponentMock();

    fireEvent.click(screen.getByTestId("removeProductsButton"));

    expect(dispatch).toHaveBeenCalledWith(
      removeProductFromCart(mockProductQuantity.sku)
    );
  });
});
