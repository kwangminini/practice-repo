import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CustomHookModal from ".";

const renderComponent = () => {
  render(<CustomHookModal />);
};
describe("CustomHookModal", () => {
  it("render", () => {
    renderComponent();
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("커스텀 훅을 이용한 모달 테스트");
  });

  it("render modal button", () => {
    renderComponent();
    screen.getAllByText(/modal/);
  });
});
