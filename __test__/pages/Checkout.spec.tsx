import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, Mock } from "vitest";
import Checkout from "../../src/pages/Checkout";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockCart } from "../mocks/customMocks";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

describe("<Checkout />", () => {
  const renderComponentMock = (auth: boolean) => {
    const history = createMemoryHistory();
    const store = mockStore({
      cart: {
        products: mockCart,
      },
    });

    (useAuthState as Mock).mockReturnValue(
      auth ? [{ uid: "123", email: "test@test.com" }, false] : [null, false]
    );

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="*" element={<Checkout />} />
          </Routes>
        </Router>
      </Provider>
    );

    return history;
  };

  it("Should render Checkout page", () => {
    renderComponentMock(true);

    expect(screen.getByLabelText("First Name")).toBeVisible();
    expect(screen.getByLabelText("Last Name")).toBeVisible();
    expect(screen.getByLabelText("ZIP code")).toBeVisible();
    expect(screen.getByLabelText("Country / Region")).toBeVisible();
    expect(screen.getByLabelText("Street address")).toBeVisible();
    expect(screen.getByLabelText("Town / City")).toBeVisible();
    expect(screen.getByLabelText("Province")).toBeVisible();
    expect(screen.getByLabelText("Email address")).toBeVisible();
    expect(screen.getByDisplayValue("bank")).toBeVisible();
    const checkoutBtn = screen.getByRole("button", { name: "Place order" });
    expect(checkoutBtn).not.toBeDisabled();

    expect(screen.getAllByTestId("bottonCard")).toHaveLength(4);
  });

  it("Should redirect to Login Page if not authenticated", () => {
    const history = renderComponentMock(false);

    expect(history.location.pathname).toBe("/login");
  });
});
