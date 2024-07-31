import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactInformations from "../../../src/components/contact/ContactInformations";

describe("<ContactInformations />", () => {
  it("Should render ContactInformations", () => {
    render(<ContactInformations />);

    const titles = screen.getAllByRole("heading");
    const inputs = screen.getAllByRole("textbox");

    expect(titles).toHaveLength(4);
    expect(inputs).toHaveLength(4);

    expect(titles[0]).toHaveTextContent("Get In Touch With Us");
    expect(titles[1]).toHaveTextContent("Adress");
    expect(titles[2]).toHaveTextContent("Phone");
    expect(titles[3]).toHaveTextContent("Working Time");
    expect(inputs[0]).toHaveAttribute("placeholder", "Abc");
    expect(inputs[1]).toHaveAttribute("placeholder", "Abc@def.com");
    expect(inputs[2]).toHaveAttribute("placeholder", "This is optional");
    expect(inputs[3]).toHaveAttribute(
      "placeholder",
      "Hi! I'd like to ask about"
    );
  });
});
