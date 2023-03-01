import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreatePortalModal from ".";

const renderComponent = (isShowing: boolean, close: () => void) => {
  render(<CreatePortalModal isShowing={isShowing} close={close} />);
};
const close = jest.fn();

describe("CreatePortalModal", () => {
  it("render", () => {
    renderComponent(true, close);
    const title = screen.getByText("모달 타이틀");
    expect(title).toBeVisible();
  });

  it("number + 버튼 클릭 시 number가 증가한다", async () => {
    renderComponent(true, close);
    const button = screen.getByRole("button", { name: "+" });
    //버튼 클릭 전
    expect(screen.getByText("number : 0")).toBeInTheDocument();

    //버튼 클릭 후
    await userEvent.click(button);
    expect(screen.getByText("number : 1")).toBeInTheDocument();
  });
});
