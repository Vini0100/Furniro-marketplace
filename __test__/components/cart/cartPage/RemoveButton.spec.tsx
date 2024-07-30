import React from "react";
import "@testing-library/jest-dom";
import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RemoveButton from "../../../../src/components/cart/cartPage/RemoveButton";

describe("<RemoveButton />", () => {
  it("Should render RemoveButton and handle click", () => {
    const handleRemoveToCartMock = vi.fn();
    render(<RemoveButton handleRemoveToCart={handleRemoveToCartMock} />);

    const removeButton = screen.getByTestId("removeProductsButton");
    expect(removeButton).toBeVisible();

    fireEvent.click(removeButton);

    expect(handleRemoveToCartMock).toHaveBeenCalled();
  });
});
