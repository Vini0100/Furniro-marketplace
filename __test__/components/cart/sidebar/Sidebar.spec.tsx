import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import Sidebar from "../../../../src/components/cart/sidebar/Sidebar";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { mockCart } from "../../../mocks/customMocks";
import "@testing-library/jest-dom";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const history = createMemoryHistory();
const setActiveMock = vi.fn();

const mockStore = configureStore([]);

describe("<Sidebar />", () => {
  const renderComponentMock = (
    isActive: (value: boolean) => void,
    history: MemoryHistory
  ) => {
    const store = mockStore({
      cart: {
        products: mockCart,
      },
    });

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Sidebar active={isActive} />
        </Router>
      </Provider>
    );
  };

  it("Should render Sidebar and navigate to checkout", () => {
    renderComponentMock(setActiveMock, history);

    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();

    const closeButton = screen.getByAltText("Close Cart");
    fireEvent.click(closeButton);
    expect(setActiveMock).toHaveBeenCalled();
  });

  it("Should active the function of closing the cart when the Esq key is clicked", () => {
    renderComponentMock(setActiveMock, history);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(setActiveMock).toHaveBeenCalled();
  });

  it("Should navigate in Cart and Checkout pages", () => {
    renderComponentMock(setActiveMock, history);

    const cartButton = screen.getByRole("button", { name: /cart/i });
    const checkoutButton = screen.getByRole("button", { name: /checkout/i });

    fireEvent.click(checkoutButton);
    expect(history.location.pathname).toBe("/checkout");

    fireEvent.click(cartButton);
    expect(history.location.pathname).toBe("/cart");
  });
});
