import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductNotFound from "../../../src/components/shop/ProductNotFound";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

describe("<ProductNotFound />", () => {
  const renderComponentMock = () => {
    render(
      <Router location={history.location} navigator={history}>
        <ProductNotFound />
      </Router>
    );
  };

  it("Should render ProductNotFound and navigate to Shop", () => {
    renderComponentMock();
    expect(
      screen.getByRole("heading", { name: "Product Not Found" })
    ).toBeVisible();
    expect(
      screen.getByText("We couldn't find the product you're looking for.")
    ).toBeVisible();
    const linkShop = screen.getByText("Go to Shop");
    fireEvent.click(linkShop);

    expect(history.location.pathname).toBe("/shop");
  });
});
