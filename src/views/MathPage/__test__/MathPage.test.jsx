import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MathPage from "../MathPage.jsx";

describe("MathPage", () => {
  it("should render without crashing", () => {
    render(<MathPage />);
    expect(screen.getByText(/MathPage/i)).toBeDefined();
  });
});
