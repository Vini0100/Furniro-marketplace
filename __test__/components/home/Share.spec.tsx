import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Share from "../../../src/components/home/Share";
import "@testing-library/jest-dom";

describe("<Share />", () => {
  it("should render Share component", () => {
    render(<Share />);

    expect(screen.getByText("Share your setup with")).toBeInTheDocument();
    expect(screen.getByText("#FuniroFurniture")).toBeInTheDocument();

    const imageAltTexts = [
      "Living Room",
      "Office",
      "Room",
      "Tables",
      "Dinner",
      "Room 2",
      "Dinner 2",
      "Living Room 2",
      "Kitchen",
    ];

    imageAltTexts.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });
});
