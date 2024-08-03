import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Inspirations from "../../../src/components/home/Inspirations";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { mockCart } from "../../mocks/customMocks";
import "@testing-library/jest-dom";

vi.mock("../../../src/components/home/CarouselIns", () => {
  return {
    default: () => <div>Mock CarouselIns</div>,
  };
});

const mockStore = configureStore([]);

describe("<Inspirations />", () => {
  const renderComponentMock = () => {
    const store = mockStore({
      products: {
        products: mockCart,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Inspirations />
        </BrowserRouter>
      </Provider>
    );
  };

  it("Should render Inspirations", () => {
    renderComponentMock();
    expect(screen.getByText("50+ Beautiful rooms inspiration")).toBeVisible();
    expect(screen.getByText("Explore More")).toBeVisible();
    expect(screen.getByText("Mock CarouselIns")).toBeVisible();
  });
});
