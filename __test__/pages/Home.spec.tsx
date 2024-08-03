import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../../src/pages/Home";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { mockCart, mockProductQuantity } from "../mocks/customMocks";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

global.matchMedia =
  global.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }));

const history = createMemoryHistory();
const mockStore = configureStore([]);

describe("<Home />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
      products: {
        products: mockCart,
      },
    });

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Home />
        </Router>
      </Provider>
    );
  };

  it("Should render Home page", () => {
    const truncateText = (text: string, maxWords: number): string => {
      const words = text.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return text;
    };
    renderComponentMock();

    expect(
      screen.getByRole("heading", { name: "Discover Our New Collection" })
    ).toBeVisible();

    expect(screen.getByAltText("Dining"));
    expect(screen.getByAltText("Living"));
    expect(screen.getByAltText("Bedroom"));

    expect(screen.getByRole("heading", { name: "Our Products" })).toBeVisible();
    mockCart.forEach((product) => {
      expect(screen.getByAltText(product.title)).toBeVisible();
      expect(
        screen.getByRole("heading", { name: product.title })
      ).toBeVisible();
      expect(
        screen.getByText(
          product.description?.short
            ? truncateText(product.description.short, 10)
            : ""
        )
      ).toBeVisible();
      if (product.new) {
        expect(screen.getByText("New")).toBeVisible();
      }
      if (product.discountPercentage > 0) {
        expect(
          expect(
            screen.getByText(
              `-${Math.round(product.discountPercentage * 100)}%`
            )
          ).toBeVisible()
        );
      }
    });

    expect(screen.getByText("50+ Beautiful rooms inspiration")).toBeVisible();

    expect(screen.getByText("#FuniroFurniture")).toBeInTheDocument();
  });
});
