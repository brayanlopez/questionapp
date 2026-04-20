import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import ExamComponent from "../../components/Exam.component.jsx";

const mockQuestions = {
  title: "Test Exam",
  questions: [
    {
      statement: "Pregunta 1",
      options: ["A", "B"],
      correct_answer: "A",
      explanation: "Explicación",
    },
    { statement: "Pregunta 2", options: ["C", "D"], correct_answer: "D" },
  ],
};

// Mock global MathJax for tests
beforeAll(() => {
  window.MathJax = {
    typesetPromise: () => Promise.resolve(),
  };
});

describe("ExamComponent", () => {
  it("should render exam title and questions", () => {
    render(
      <ExamComponent questions={mockQuestions} onClickBackButton={() => {}} />,
    );
    expect(screen.getByText(/Test Exam/i)).toBeInTheDocument();
    expect(screen.getByText(/Pregunta 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Pregunta 2/i)).toBeInTheDocument();
  });
});
