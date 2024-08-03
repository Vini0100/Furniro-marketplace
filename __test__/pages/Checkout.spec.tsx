import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";
import Checkout from "../../src/pages/Checkout";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockCart } from "../mocks/customMocks";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

describe("<Checkout />", () => {
  const renderComponentMock = (initialPath: string) => {
    const store = mockStore({
      cart: {
        products: mockCart,
      },
    });

    (useAuthState as Mock).mockReturnValue([
      { uid: "123", email: "test@test.com" },
    ]);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialPath]}>
          <Routes>
            <Route path="*" element={<Checkout />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };

  it("Should render Cart page", () => {
    const initialPath = "/Checkout";
    renderComponentMock(initialPath);

    expect(
      screen.getByRole("heading", { name: "Checkout" })
    ).toBeInTheDocument();

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
});
