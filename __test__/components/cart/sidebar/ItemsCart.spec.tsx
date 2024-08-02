import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Provider } from "react-redux";
import ItemsCart from "../../../../src/components/cart/sidebar/ItemsCart";
import { mockCart } from "../../../mocks/customMocks";
import configureStore from "redux-mock-store";
import { removeProductFromCart } from "../../../../src/redux/features/cart/cartSlice";

const mockStore = configureStore([]);

describe("<ItemsCart />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      cart: { products: mockCart },
    });

    const dispatch = vi.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <ItemsCart />
      </Provider>
    );

    return dispatch;
  };

  it("should dispatch removeProductFromCart when close icon is clicked", () => {
    const dispatch = renderComponentMock();

    fireEvent.click(screen.getAllByTestId("closeIcon")[0]);

    expect(dispatch).toHaveBeenCalledWith(
      removeProductFromCart(mockCart[0].sku)
    );
  });
});
