import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import ShowMoreBtn from "../../../src/components/global/ShowMoreBtn";

describe("<ShowMoreBtnProps />", () => {
  const renderComponentMock = () => {
    const handleClick = vi.fn();
    render(<ShowMoreBtn handleClick={handleClick} />);
    return handleClick;
  };

  it("should render the ShowMoreBtn", () => {
    const handleClick = renderComponentMock();

    const increaseBtn = screen.getByRole("button", { name: "Show More" });
    expect(increaseBtn).toBeVisible();
    fireEvent.click(increaseBtn);

    expect(handleClick).toBeCalled();
  });
});
