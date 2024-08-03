import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Footer from "../../../src/components/footer/Footer";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
  it("Should render Footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText("Funiro.")).toBeVisible();

    expect(
      screen.getByText("400 University Drive Suite 200 Coral Gables,")
    ).toBeVisible();
    expect(screen.getByText("FL 33134 USA")).toBeVisible();

    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("Shop")).toBeVisible();
    expect(screen.getByText("About")).toBeVisible();
    expect(screen.getByText("Contact")).toBeVisible();

    expect(screen.getByText("Payment Options")).toBeVisible();
    expect(screen.getByText("Returns")).toBeVisible();
    expect(screen.getByText("Privacy Policies")).toBeVisible();

    expect(
      screen.getByPlaceholderText("Enter Your Email Address")
    ).toBeVisible();
    expect(screen.getByText("SUBSCRIBE")).toBeVisible();

    expect(screen.getByText("2023 furino. All rights reverved")).toBeVisible();
  });

  it("Should open links on icon click", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(vi.fn());

    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByLabelText("facebook"));
    fireEvent.click(screen.getByLabelText("instagram"));
    fireEvent.click(screen.getByLabelText("twitter"));
    fireEvent.click(screen.getByLabelText("linkedin"));

    expect(openSpy).toHaveBeenCalledWith("https://www.facebook.com/");
    expect(openSpy).toHaveBeenCalledWith("https://www.instagram.com/");
    expect(openSpy).toHaveBeenCalledWith("https://x.com/");
    expect(openSpy).toHaveBeenCalledWith("https://www.linkedin.com/");
  });
});
