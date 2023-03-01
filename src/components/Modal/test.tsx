import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from ".";

describe("Modal", () => {
  it("render", () => {
    const close = jest.fn();
    const isShowing = jest.fn().mockReturnValue(true);
    render(<Modal isShowing={isShowing()} close={close} />);
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
