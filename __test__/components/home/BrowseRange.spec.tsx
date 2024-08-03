import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BrowseRange from "../../../src/components/home/BrowseRange";
import "@testing-library/jest-dom";

describe("<BrowseRange />", () => {
  it("Should render BrowseRange", () => {
    render(<BrowseRange />);

    expect(screen.getByRole("heading", { name: "Browse The Range" }));
    expect(
      screen.getByRole("heading", {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      })
    );
    expect(screen.getByAltText("Dining"));
    expect(screen.getByAltText("Living"));
    expect(screen.getByAltText("Bedroom"));
  });
});
