import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi, Mock, expect } from "vitest";
import Logout from "../../../src/components/global/Logout";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import { useAuthState } from "react-firebase-hooks/auth";
import "@testing-library/jest-dom";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
}));

describe("<Logout />", () => {
  const renderComponentMock = (history: MemoryHistory) => {
    (useAuthState as Mock).mockReturnValue([
      { uid: "123", email: "test@test.com" },
    ]);

    render(
      <Router location={history.location} navigator={history}>
        <Logout />
      </Router>
    );
  };

  it("Should render Logout and navigate do login", async () => {
    const history = createMemoryHistory();
    renderComponentMock(history);

    const buttonLogout = screen.getByRole("button", { name: "Logout" });

    fireEvent.click(buttonLogout);

    await screen.findByRole("button", { name: "Logout" });

    expect(history.location.pathname).toBe("/login");
  });
});
