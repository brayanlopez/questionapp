import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import SectionComponent from "../Section.component.jsx";

describe("SectionComponent", () => {
  it("should render three papers when SectionComponent is mounted", () => {
    render(<SectionComponent />);
    const papers = document.querySelectorAll(".MuiPaper-root");
    expect(papers.length).toBe(3);
  });

  it("should have each paper a height of 140 when SectionComponent is mounted", () => {
    render(<SectionComponent />);
    const papers = document.querySelectorAll(".MuiPaper-root");
    papers.forEach((paper) => {
      const height = window.getComputedStyle(paper).height;
      expect(height).toMatch(/140/);
    });
  });
});
