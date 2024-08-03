import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ButtonCart from "../../../../src/components/cart/sidebar/ButtonCart";

describe("<ButtonCart />", () => {
  const onClick = vi.fn();
  const rendeComponentMock = () => {
    render(<ButtonCart onClick={onClick} children="test" />);
  };

  it("Should render ButtonCart", () => {
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
