import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";
import { Provider } from "react-redux";
import FormCheckout from "../../../src/components/checkout/FormCheckout";
import { mockCart } from "../../mocks/customMocks";
import configureStore from "redux-mock-store";
import { createMemoryHistory, MemoryHistory } from "history";
import { useAuthState } from "react-firebase-hooks/auth";
import { Router } from "react-router-dom";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

describe("<FormCheckout />", () => {
  const renderComponentMock = (
    isAuthenticated: boolean,
    history: MemoryHistory
  ) => {
    (useAuthState as Mock).mockReturnValue([
      isAuthenticated ? { uid: "123", email: "test@test.com" } : null,
    ]);

    const store = mockStore({
      cart: {
        products: mockCart,
      },
    });
    const dispatch = vi.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <FormCheckout />
        </Router>
      </Provider>
    );

    return dispatch;
  };

  it("Should render FormCheckout with Login and navigate to home", () => {
    const history = createMemoryHistory();
    renderComponentMock(true, history);

    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const zipCodeInput = screen.getByLabelText("ZIP code");
    const countryRegionInput = screen.getByLabelText("Country / Region");
    const streetAddressInput = screen.getByLabelText("Street address");
    const townCityInput = screen.getByLabelText("Town / City");
    const provinceInput = screen.getByLabelText("Province");
    const emailInput = screen.getByLabelText("Email address");
    const paymentBank = screen.getByDisplayValue("bank");

    fireEvent.change(firstNameInput, { target: { value: "Vincius" } });
    fireEvent.change(lastNameInput, { target: { value: "Adams" } });
    fireEvent.change(zipCodeInput, { target: { value: "98400000" } });
    fireEvent.change(countryRegionInput, { target: { value: "BR" } });
    fireEvent.change(streetAddressInput, { target: { value: "Rua Machado" } });
    fireEvent.change(townCityInput, {
      target: { value: "Frederico Westphalen" },
    });
    fireEvent.change(provinceInput, { target: { value: "RS" } });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.click(paymentBank);

    expect(screen.getAllByRole("textbox")).toHaveLength(11);
    expect(
      screen.getByRole("heading", { name: "Billing details" })
    ).toBeVisible();
    expect(screen.getByRole("heading", { name: "Product" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Subtotal" })).toBeVisible();

    const checkoutBtn = screen.getByRole("button", { name: "Place order" });
    expect(checkoutBtn).not.toBeDisabled();
    fireEvent.click(checkoutBtn);

    expect(history.location.pathname).toBe("/");
  });
});
