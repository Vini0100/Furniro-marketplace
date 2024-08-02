import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import Header from "../../../src/components/header/Header";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { useAuthState } from "react-firebase-hooks/auth";
import { mockCart } from "../../mocks/customMocks";
import "@testing-library/jest-dom";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

describe("<Header />", () => {
  const renderComponentMock = (isAuthenticated: boolean) => {
    (useAuthState as Mock).mockReturnValue([
      isAuthenticated ? { uid: "123", email: "test@test.com" } : null,
    ]);

    const store = mockStore({
      cart: {
        products: mockCart,
      },
    });

    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      </Provider>
    );
  };

  it("Should render Header with Login when not authenticated", () => {
    renderComponentMock(false);

    expect(screen.getByAltText("User")).toBeVisible();
    expect(screen.queryByText("Logout")).toBeNull();
  });

  it("Should render Header with Logout when authenticated", () => {
    renderComponentMock(true);

    expect(screen.queryByAltText("User")).toBeNull();
    expect(screen.getByText("Logout")).toBeVisible();
  });

  it("Should display cart quantity correctly", () => {
    renderComponentMock(true);

    const quantity = mockCart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    expect(screen.getByText(quantity.toString())).toBeVisible();
  });

  it("Should toggle sidebar visibility on cart icon click", () => {
    renderComponentMock(true);

    fireEvent.click(screen.getByAltText("Cart"));

    expect(screen.getByAltText("Close Cart")).toBeVisible();
  });
});
