import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductsList from "../../../src/components/home/ProductsList";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { mockCart } from "../../mocks/customMocks";
import "@testing-library/jest-dom";

const history = createMemoryHistory();

const mockStore = configureStore([]);

describe("<ProductsList />", () => {
  const renderComponentMock = (history: MemoryHistory) => {
    const store = mockStore({
      products: {
        products: mockCart,
      },
    });

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <ProductsList />
        </Router>
      </Provider>
    );
  };

  it("Should render ProductsList and navigate to Shop", () => {
    const truncateText = (text: string, maxWords: number): string => {
      const words = text.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return text;
    };
    renderComponentMock(history);

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
    const showMoreBtn = screen.getByRole("button", { name: "Show More" });
    fireEvent.click(showMoreBtn);
    expect(history.location.pathname).toBe("/shop");
  });
});
