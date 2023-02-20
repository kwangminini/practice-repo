import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from ".";

const close = jest.fn();
describe("Modal", () => {
  it("render", () => {
    render(<Modal close={close} />);
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
