import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ApiStructure from ".";

const renderComponent = () => {
  render(<ApiStructure />);
};

describe("ApiStructure", () => {
  it("render", () => {
    renderComponent();
    const title = screen.getByText("Api Structure Page");
    expect(title).toBeVisible();
  });
});
