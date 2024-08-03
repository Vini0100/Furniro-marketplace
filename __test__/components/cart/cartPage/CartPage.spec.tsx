import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, it, vi, Mock, expect } from "vitest";
import CartPage from "../../../../src/components/cart/cartPage/CartPage";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { useAuthState } from "react-firebase-hooks/auth";
import { mockCart } from "../../../mocks/customMocks";
import "@testing-library/jest-dom";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

describe("<CartPage />", () => {
  const renderComponentMock = (
    isAuthenticated: boolean,
    history: MemoryHistory,
    withoutProducts?: boolean
  ) => {
    (useAuthState as Mock).mockReturnValue([
      isAuthenticated ? { uid: "123", email: "test@test.com" } : null,
    ]);

    const store = mockStore({
      cart: {
        products: withoutProducts ? [] : mockCart,
      },
    });

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <CartPage />
        </Router>
      </Provider>
    );
  };

  it("Should render CartPage with Login and navigate to checkout", () => {
    const history = createMemoryHistory();
    renderComponentMock(true, history);

    const ulElement = screen.getByTestId("listHeader");
    const listItem = within(ulElement).getAllByRole("listitem");
    const totalsHeading = screen.getByRole("heading", {
      name: "Cart Totals",
    });
    const subtotal = screen.getAllByText(`Rp. ${70.55}`);
    const button = screen.getByRole("button", { name: "Check Out" });
    const loginButton = screen.queryByRole("button", { name: "Login" });

    expect(listItem).toHaveLength(4);
    expect(totalsHeading).toBeVisible();
    expect(subtotal).toHaveLength(2);
    expect(button).toBeVisible();
    expect(loginButton).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(history.location.pathname).toBe("/checkout");
  });

  it("Should render CartPage without Login and navigate to login", () => {
    const history = createMemoryHistory();
    renderComponentMock(false, history);

    const loginButton = screen.getByRole("button", { name: "Login" });
    const checkoutButton = screen.queryByRole("button", {
      name: "Check Out",
    });

    expect(loginButton).toBeVisible();
    expect(checkoutButton).not.toBeInTheDocument();

    fireEvent.click(loginButton);

    expect(history.location.pathname).toBe("/login");
  });

  it("Should render CartPage with CheckoutBtn disabled when no products in Cart", () => {
    const history = createMemoryHistory();
    renderComponentMock(true, history, true);

    const checkoutButton = screen.queryByRole("button", {
      name: "Check Out",
    });

    expect(checkoutButton).toBeDisabled();
  });
});
