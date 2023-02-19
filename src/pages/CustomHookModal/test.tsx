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

    const modalButton = screen.getAllByText("open modal");
    expect(modalButton).toHaveLength(3);
  });

  it("render modal description text", () => {
    renderComponent();

    const parentStateModalText = screen.getByText(
      "부모컴포넌트 state를 이용한 모달 띄우는 방식"
    );
    expect(parentStateModalText).toBeVisible();

    const customHookModalText = screen.getByText(
      "custom hook을 이용한 모달 띄우는 방식"
    );
    expect(customHookModalText).toBeVisible();

    const notImportCustomHookModalText = screen.getByText(
      "import modal 없이custom hook을 이용한 모달 띄우는 방식"
    );
    expect(notImportCustomHookModalText).toBeVisible();
  });
});
