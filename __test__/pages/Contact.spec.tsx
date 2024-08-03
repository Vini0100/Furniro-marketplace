import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "../../src/pages/Contact";

import "@testing-library/jest-dom";

import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("<contact />", () => {
  const renderComponentMock = (initialPath: string) => {
    render(
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="*" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("Should render contact page", () => {
    const initialPath = "/contact";
    renderComponentMock(initialPath);

    expect(
      screen.getByRole("heading", { name: "Contact" })
    ).toBeInTheDocument();

    expect(screen.getByText("Get In Touch With Us")).toBeVisible();
    expect(screen.getByText("Adress")).toBeVisible();
    expect(screen.getByText("Phone")).toBeVisible();
    expect(screen.getByText("Working Time")).toBeVisible();

    expect(screen.getAllByTestId("bottonCard")).toHaveLength(4);
  });
});
