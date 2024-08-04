import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CheckoutBtn from "../../../../src/components/cart/cartPage/CheckoutBtn";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { mockCart } from "../../../mocks/customMocks";
import configureStore from "redux-mock-store";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

const history = createMemoryHistory();

describe("<CheckoutBtn />", () => {
  const renderComponentMock = (withoutProducts = false) => {
    const store = mockStore({
      cart: {
        products: withoutProducts ? [] : mockCart,
      },
    });

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <CheckoutBtn link="/login">test</CheckoutBtn>
        </Router>
      </Provider>
    );
  };

  it("Should render CheckoutBtn", () => {
    renderComponentMock();
    const button = screen.getByRole("button");

    expect(button).toBeVisible();
    expect(button).toHaveTextContent("test");
  });

  it("Should call navigate on button click", () => {
    renderComponentMock();

    const button = screen.getByText("test");
    fireEvent.click(button);

    expect(history.location.pathname).toBe("/login");
  });

  it("Should be disabled when cart is empty", () => {
    renderComponentMock(true);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});
