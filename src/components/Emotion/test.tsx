import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useNavigate } from "react-router-dom";
import Emotion from "./index";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedUseNavigate,
}));

describe("Emotion", () => {
  it("render test", () => {
    const { container } = render(<Emotion />);
    expect(container).toHaveTextContent("fontColor:red");
  });

  it("custom hook modal 버튼을 클릭하면 customhookmodal페이지로 이동된다.", () => {
    const { getByText } = render(<Emotion />);
    const button = getByText("Custom Hook Modal");

    fireEvent.click(button);
    expect(mockedUseNavigate).toHaveBeenCalledWith("/customhookmodal");
  });
});
