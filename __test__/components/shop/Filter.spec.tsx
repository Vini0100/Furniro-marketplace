import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Filter from "../../../src/components/shop/Filter";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("<Filter />", () => {
  const renderComponentMock = (category?: string) => {
    const store = mockStore({
      filterShop: {
        totalProducts: 2,
        productsPerPage: 16,
        category: category ? category : "Default",
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Filter />
        </BrowserRouter>
      </Provider>
    );
  };

  it("Should render Filter", () => {
    renderComponentMock();

    expect(screen.getByRole("button", { name: "Filter" })).toBeVisible();
    expect(screen.getByTestId("showResults")).toHaveTextContent(
      "Showing 1-16 of 2 results"
    );
    expect(screen.getByLabelText("Show")).toBeVisible();
    expect(screen.getByLabelText("Short by")).toBeVisible();
  });

  it("Should render buttons", () => {
    renderComponentMock();

    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  it("Should show correct number of products per page", () => {
    renderComponentMock();

    const showSelect = screen.getByLabelText("Show") as HTMLSelectElement;
    expect(showSelect.value).toBe("16");
  });

  it("Should show correct category", () => {
    renderComponentMock("Racks");

    const shortBySelect = screen.getByLabelText(
      "Short by"
    ) as HTMLSelectElement;
    expect(shortBySelect.value).toBe("Racks");
  });
});
