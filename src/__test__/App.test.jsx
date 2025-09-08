import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../App.jsx";

describe("App", () => {
  it("should render without crashing", () => {
    render(<App />);
    expect(document.body).toBeDefined();
  });
});
