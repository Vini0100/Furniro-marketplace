import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import QuantityBtn from "../../../src/components/global/QuantityBtn";
import "@testing-library/jest-dom";

describe("<QuantityBtn />", () => {
  const renderComponentMock = (
    initialQuantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
  ) => {
    render(
      <QuantityBtn quantity={initialQuantity} setQuantity={setQuantity} />
    );
    return setQuantity;
  };

  it("should call the increaseQuantity", () => {
    const setQuantity = vi.fn();
    renderComponentMock(5, setQuantity);

    const increaseBtn = screen.getByText("+");
    fireEvent.click(increaseBtn);

    expect(setQuantity).toBeCalled();
  });

  it("should call the decreaseQuantity", () => {
    const setQuantity = vi.fn();
    renderComponentMock(5, setQuantity);

    const decreaseBtn = screen.getByText("-");
    fireEvent.click(decreaseBtn);

    expect(setQuantity).toBeCalled();
  });

  it("should call the correct initial quantity", () => {
    const setQuantity = vi.fn();
    renderComponentMock(5, setQuantity);

    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
