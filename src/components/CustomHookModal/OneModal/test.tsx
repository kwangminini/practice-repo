import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OneModal from ".";

const renderComponent = () => {
  render(<OneModal />);
};

describe("OneModal", () => {
  it("render", () => {
    renderComponent();
    const title = screen.getByText("Step 1");
    expect(title).toBeVisible();
  });

  it("1번 모달 버튼 클릭 시 모달 open", async () => {
    renderComponent();
    expect(screen.queryByText("모달 타이틀")).toBeNull();

    //버튼 클릭
    const buttons = screen.getAllByText("open modal");
    await userEvent.click(buttons[0]);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });

  it("2번 모달 버튼 클릭 시 모달 open", async () => {
    renderComponent();
    expect(screen.queryByText("모달 타이틀")).toBeNull();

    //버튼 클릭
    const buttons = screen.getAllByText("open modal");
    await userEvent.click(buttons[1]);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });

  it("3번 모달 버튼 클릭 시 모달 open", async () => {
    renderComponent();
    expect(screen.queryByText("모달 타이틀")).toBeNull();

    //버튼 클릭
    const buttons = screen.getAllByText("open modal");
    await userEvent.click(buttons[2]);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});
