import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ApiStructure from ".";

const renderComponent = () => {
  render(<ApiStructure />);
};

describe("ApiStructureByClass", () => {
  it("render", () => {
    renderComponent();
    const title = screen.getByText("Api Structure By Class Page");
    expect(title).toBeVisible();
  });
});
