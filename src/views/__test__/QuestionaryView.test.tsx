import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import QuestionaryView from "../questionary.view";

// Mock global MathJax for tests
beforeAll(() => {
  window.MathJax = {
    typesetPromise: () => Promise.resolve(),
  };
});

describe("QuestionaryView", () => {
  it("should render questionary view", () => {
    render(<QuestionaryView />);
    expect(screen.getByText(/Preguntas/i)).toBeDefined();
  });
});
