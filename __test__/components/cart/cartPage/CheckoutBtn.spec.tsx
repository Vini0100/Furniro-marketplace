import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import CheckoutBtn from "../../../../src/components/cart/cartPage/CheckoutBtn";

describe("<CheckoutBtn />", () => {
  const onClick = vi.fn();
  const rendeComponentMock = () => {
    render(<CheckoutBtn onClick={onClick} children="test" />);
  };

  it("Should render CheckoutBtn", () => {
    rendeComponentMock();
    const button = screen.getByRole("button");

    expect(button).toBeVisible();
    expect(button).toHaveTextContent("test");
  });

  it("Should call the click of button", () => {
    rendeComponentMock();

    const button = screen.getByText("test");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
