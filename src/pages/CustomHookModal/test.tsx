import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CustomHookModal from ".";
import userEvent from "@testing-library/user-event";
import Modal from "@/components/Modal";

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
      "부모 컴포넌트 state를 이용한 모달 띄우는 방식"
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

  it("부모 컴포넌트 state를 이용한 모달 버튼을 클릭하면 모달이 나타난다", () => {
    renderComponent();
    //모달이 처음에는 보이지 않는다
    expect(screen.queryByText("모달 타이틀")).toBeNull();

    //버튼 클릭 시 모달 등장
    const button = screen.getByText(
      "부모 컴포넌트 state를 이용한 모달 띄우는 방식"
    );
    userEvent.click(button);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
