import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import TopBarProduct from "../../../../src/components/header/topBar/TopBarProduct";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { mockProductQuantity } from "../../../mocks/customMocks";
import "@testing-library/jest-dom";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

describe("<TopBarProduct />", () => {
  const renderComponentMock = (history: MemoryHistory) => {
    const store = mockStore({
      productDetail: {
        product: mockProductQuantity,
      },
    });

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <TopBarProduct />
        </Router>
      </Provider>
    );
  };

  it("Should render TopBarProduct with mocked data", () => {
    const history = createMemoryHistory();
    renderComponentMock(history);

    const productElement = screen.getByText(mockProductQuantity.title);
    expect(productElement).toBeInTheDocument();
  });
});
