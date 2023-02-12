import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Emotion from "./index";

describe("Emotion", () => {
  it("render test", () => {
    const { container } = render(<Emotion />);
    expect(container).toHaveTextContent("fontColor:red");
  });
});
