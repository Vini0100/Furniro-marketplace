import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Cart from "../../src/pages/Cart";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockCart } from "../mocks/customMocks";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const mockStore = configureStore([]);

describe("<Cart />", () => {
  const renderComponentMock = (initialPath: string) => {
    const store = mockStore({
      cart: {
        products: mockCart,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialPath]}>
          <Routes>
            <Route path="*" element={<Cart />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };

  it("Should render Cart page", async () => {
    const initialPath = "/cart";
    renderComponentMock(initialPath);

    await screen.findAllByRole("button", { name: "Login" });

    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Cart Totals",
      })
    ).toBeVisible();

    expect(screen.getAllByTestId("bottonCard")).toHaveLength(4);
  });
});
