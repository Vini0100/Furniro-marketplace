import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeAll, vi } from "vitest";
import Shop from "../../src/pages/Shop";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockCart } from "../mocks/customMocks";
import { MemoryRouter, Routes, Route } from "react-router-dom";

beforeAll(() => {
  window.scrollTo = vi.fn();
});

const mockStore = configureStore([]);

describe("<Shop />", () => {
  const renderComponentMock = (initialPath: string) => {
    const store = mockStore({
      products: {
        products: mockCart,
      },
      filterShop: {
        totalProducts: 2,
        productsPerPage: 16,
        category: "Default",
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialPath]}>
          <Routes>
            <Route path="*" element={<Shop />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };

  it("Should render Shop page", () => {
    renderComponentMock("/shop");

    expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Filter" })).toBeVisible();
    expect(screen.getByTestId("showResults")).toHaveTextContent(
      "Showing 1-16 of 2 results"
    );
    expect(screen.getByLabelText("Show")).toBeVisible();
    expect(screen.getByLabelText("Short by")).toBeVisible();
    expect(screen.getAllByTestId("bottonCard")).toHaveLength(4);
  });
});
