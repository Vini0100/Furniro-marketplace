import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Discover from "../../../src/components/home/Discover";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

describe("<Discover />", () => {
  const renderComponentMock = () => {
    render(
      <Router location={history.location} navigator={history}>
        <Discover />
      </Router>
    );
  };

  it("Should render Discover and navigate to Shop", () => {
    renderComponentMock();
    expect(screen.getByRole("heading", { name: "New Arrival" })).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Discover Our New Collection" })
    ).toBeVisible();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
      )
    ).toBeVisible();
    const buttonDiscovery = screen.getByRole("button", { name: "BUY Now" });
    fireEvent.click(buttonDiscovery);

    expect(history.location.pathname).toBe("/shop");
  });
});
