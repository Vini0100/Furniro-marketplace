import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import BottomBar from "../../../src/components/bottonBar/BottonBar";

describe("<BottomBar />", () => {
  it("Should render BottomBar", () => {
    render(<BottomBar />);

    const items = screen.getAllByRole("img");
    expect(items).toHaveLength(4);
  });
});
