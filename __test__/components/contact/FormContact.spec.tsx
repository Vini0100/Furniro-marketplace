import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FormContact from "../../../src/components/contact/FormContact";

describe("<FormContact />", () => {
  it("should clear the form when submission is correct", () => {
    render(<FormContact />);

    const inputs = screen.getAllByRole("textbox");
    const buttonSubmit = screen.getByRole("button");

    inputs.forEach((input) => {
      fireEvent.change(input, { target: { value: "test@test.com" } });
    });

    fireEvent.click(buttonSubmit);

    inputs.forEach((input) => {
      expect(input).not.toHaveValue();
    });

    const errorElements = document.querySelectorAll(".text-customRed");

    errorElements.forEach((errorElement) => {
      expect(errorElement).not.toBeVisible();
    });
  });

  it("should show error messages when inputs are incorrect and the form is submitted", () => {
    render(<FormContact />);

    const inputs = screen.getAllByRole("textbox");
    const buttonSubmit = screen.getByRole("button");

    inputs.forEach((input) => {
      fireEvent.change(input, { target: { value: "a" } });
    });

    fireEvent.change(inputs[1], { target: { value: "a@a.c" } });
    fireEvent.click(buttonSubmit);

    const errorElements = document.querySelectorAll(".text-customRed");

    expect(errorElements).toHaveLength(3);
    errorElements.forEach((errorElement) => {
      expect(errorElement).toBeVisible();
    });
  });
});
