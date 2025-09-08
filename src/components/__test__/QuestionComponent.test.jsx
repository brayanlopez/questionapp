import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import QuestionComponent from "../../components/Question.component.jsx";

// Mock global MathJax for tests
beforeAll(() => {
  window.MathJax = {
    typesetPromise: () => Promise.resolve(),
  };
});

describe("QuestionComponent", () => {
  const question = {
    statement: "¿Cuál es la capital de Francia?",
    options: ["Madrid", "París", "Roma"],
    correct_answer: "París",
    explanation: "París es la capital de Francia.",
  };

  it("should render statement and options", () => {
    render(
      <QuestionComponent
        question={question}
        index={1}
        onCopy={() => {}}
        tooltipMessage="copiar pregunta"
        onCloseTooltip={() => {}}
      />
    );
    expect(
      screen.getByText(/¿Cuál es la capital de Francia?/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Madrid/i)).toBeInTheDocument();
    expect(screen.getAllByText(/París/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Roma/i)).toBeInTheDocument();
  });
});
