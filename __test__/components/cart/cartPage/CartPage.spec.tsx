import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, it, vi, Mock, expect } from "vitest";
import CartPage from "../../../../src/components/cart/cartPage/CartPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { useAuthState } from "react-firebase-hooks/auth";
import { mockCart } from "../../../mocks/customMocks";
import "@testing-library/jest-dom";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

describe("<CartPage />", () => {
  const renderComponentMock = (isAuthenticated: boolean) => {
    (useAuthState as Mock).mockReturnValue([
      isAuthenticated ? { uid: "123", email: "test@example.com" } : null,
    ]);

    const store = mockStore({
      cart: {
        products: mockCart,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CartPage />
        </MemoryRouter>
      </Provider>
    );
  };

  it("Should render CartPage with Login", () => {
    renderComponentMock(true);
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
  });

  it("Should render CartPage without Login", async () => {
    renderComponentMock(false);

    const loginButton = screen.getByRole("button", { name: "Login" });
    const checkoutButton = screen.queryByRole("button", {
      name: "Check Out",
    });

    expect(loginButton).toBeVisible();
    expect(checkoutButton).not.toBeInTheDocument();
  });
});
