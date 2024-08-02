import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TopBar from "../../../../src/components/header/topBar/TopBar";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

describe("<TopBar />", () => {
  const renderComponentMock = (initialPath: string) => {
    render(
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="*" element={<TopBar />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("Should render TopBar", () => {
    const initialPath = "/shop";
    renderComponentMock(initialPath);

    expect(screen.getByAltText("logotype")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByTestId("locationText")).toBeInTheDocument();
  });
});
