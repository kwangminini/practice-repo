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

  it("oneModal render", () => {
    renderComponent();
    const title = screen.getByText("Step 1");
    expect(title).toBeVisible();
  });

  it("twoModal render", () => {
    renderComponent();
    const title = screen.getByText("Step 2");
    expect(title).toBeVisible();
  });

  it("customModal render", () => {
    renderComponent();
    const title = screen.getByText("Step 3");
    expect(title).toBeVisible();
  });

  it("modalRenderTest render", () => {
    renderComponent();
    const title = screen.getByText("Step 4");
    expect(title).toBeVisible();
  });

  it("createPortalModalTest render", () => {
    renderComponent();
    const title = screen.getByText("Step 5");
    expect(title).toBeVisible();
  });
});
