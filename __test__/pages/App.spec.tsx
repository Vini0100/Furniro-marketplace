import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, vi, Mock, expect } from "vitest";
import App from "../../src/App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { useAuthState } from "react-firebase-hooks/auth";
import { mockCart } from "../mocks/customMocks";
import "@testing-library/jest-dom";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

const mockStore = configureStore([]);

describe("<App />", () => {
  const renderComponentMock = (
    isAuthenticated: boolean,
    history: MemoryHistory
  ) => {
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
        <Router location={history.location} navigator={history}>
          <App />
        </Router>
      </Provider>
    );
  };

  it("Should render App", () => {
    const history = createMemoryHistory();
    renderComponentMock(true, history);

    expect(screen.getByAltText("Logotype")).toBeVisible();
    expect(screen.getByText("2023 furino. All rights reverved")).toBeVisible();
  });
});
