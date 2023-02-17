import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Emotion from "./index";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedUseNavigate,
}));

const renderComponent = () => {
  render(<Emotion />);
};

describe("Emotion", () => {
  it("render test", () => {
    renderComponent();
    const testDiv = screen.getByText("fontColor:red");
    expect(testDiv).toHaveTextContent("fontColor:red");
  });

  it("custom hook modal 버튼을 클릭하면 customhookmodal페이지로 이동된다.", () => {
    renderComponent();
    const button = screen.getByText("Custom Hook Modal");

    fireEvent.click(button);
    expect(mockedUseNavigate).toHaveBeenCalledWith("/customhookmodal");
  });
});
