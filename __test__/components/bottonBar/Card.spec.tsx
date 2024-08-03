import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "../../../src/components/bottonBar/Card";
import { mockItemCard } from "../../mocks/customMocks";

describe("<Card />", () => {
  it("Should render BottomBar", () => {
    render(<Card item={mockItemCard} />);

    const imgElement = screen.getByAltText(mockItemCard.alt);

    expect(imgElement).toHaveAttribute("src", mockItemCard.src);
    expect(imgElement).toHaveAttribute("alt", mockItemCard.alt);
    expect(screen.getByText(mockItemCard.title)).toBeInTheDocument();
    expect(screen.getByText(mockItemCard.paragraph)).toBeInTheDocument();
  });
});
