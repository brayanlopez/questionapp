import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import SectionComponent from "../Section.component.jsx";

describe("SectionComponent", () => {
  it("renderiza tres elementos Paper", () => {
    render(<SectionComponent />);
    // Busca por la clase MUI Paper
    const papers = document.querySelectorAll(".MuiPaper-root");
    expect(papers.length).toBe(3);
  });

  it("cada Paper tiene altura 140", () => {
    render(<SectionComponent />);
    const papers = document.querySelectorAll(".MuiPaper-root");
    papers.forEach((paper) => {
      // El valor puede ser '140px' o solo '140', depende del render
      const height = window.getComputedStyle(paper).height;
      expect(height).toMatch(/140/);
    });
  });
});
