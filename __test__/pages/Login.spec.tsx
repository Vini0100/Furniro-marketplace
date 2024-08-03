import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, Mock } from "vitest";
import Login from "../../src/pages/Login";
import "@testing-library/jest-dom";
import { Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

vi.mock("react-firebase-hooks/auth", () => ({
  useAuthState: vi.fn(),
  useSignInWithEmailAndPassword: vi.fn(),
  useSignInWithGoogle: vi.fn(),
}));

describe("<Login />", () => {
  const renderComponentMock = (auth: boolean) => {
    const history = createMemoryHistory();
    (useAuthState as Mock).mockReturnValue(
      auth ? [{ uid: "123", email: "test@test.com" }, false] : [null, false]
    );
    (useSignInWithEmailAndPassword as Mock).mockReturnValue([
      () => Promise.resolve(),
      null,
      false,
      null,
    ]);
    (useSignInWithGoogle as Mock).mockReturnValue([
      () => Promise.resolve(),
      null,
      false,
      null,
    ]);

    render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    );

    return history;
  };

  it("Should render Login page without Auth", () => {
    renderComponentMock(false);

    expect(screen.getByLabelText("Email")).toBeVisible();
    expect(screen.getByLabelText("Password")).toBeVisible();
    expect(screen.getByRole("button", { name: "Login" })).toBeVisible();
    expect(screen.getByText("Or")).toBeVisible();
    expect(screen.getByText("Login with Gmail")).toBeVisible();
  });

  it("Should redirect to home when authenticated", () => {
    const history = renderComponentMock(true);

    expect(history.location.pathname).toBe("/");
  });
});
