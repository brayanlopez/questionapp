import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createTheme, ThemeProvider } from "@mui/material";
import QuestionaryView from "../questionary.view";

const mockQuestions = [
  {
    statement: "¿Cuánto es 2+2?",
    options: ["a. 3", "b. 4", "c. 5"],
    correct_answer: "b. 4",
    explanation: "Porque 2+2=4",
  },
  {
    statement: "¿Cuál es la capital de Francia?",
    options: ["a. Madrid", "b. París", "c. Roma"],
    correct_answer: "b. París",
  },
];

const renderQuiz = (props = {}) =>
  render(
    <ThemeProvider theme={createTheme()}>
      <QuestionaryView
        questions={mockQuestions}
        durationMinutes={1}
        {...props}
      />
    </ThemeProvider>,
  );

describe("QuestionaryView", () => {
  it("should render the first question", () => {
    renderQuiz();
    expect(screen.getByText(/¿Cuánto es 2\+2\?/)).toBeInTheDocument();
    expect(screen.getByText(/a. 3/)).toBeInTheDocument();
    expect(screen.getByText(/b. 4/)).toBeInTheDocument();
    expect(screen.getByText(/c. 5/)).toBeInTheDocument();
  });

  it("should show progress as 1 / 2", () => {
    renderQuiz();
    expect(screen.getByText("1 / 2")).toBeInTheDocument();
  });

  it("should navigate to next question", async () => {
    renderQuiz();
    await userEvent.click(screen.getByText("Siguiente"));
    expect(screen.getByText(/capital de Francia/)).toBeInTheDocument();
    expect(screen.getByText("2 / 2")).toBeInTheDocument();
  });

  it("should disable previous on first question", () => {
    renderQuiz();
    expect(screen.getByText("Anterior")).toBeDisabled();
  });

  it("should disable next on last question", async () => {
    renderQuiz();
    await userEvent.click(screen.getByText("Siguiente"));
    expect(screen.getByText("Siguiente")).toBeDisabled();
  });

  it("should select an answer and show correct feedback", async () => {
    renderQuiz();
    await userEvent.click(screen.getByText("b. 4"));
    const option = screen.getByText("b. 4").closest(".MuiPaper-root");
    expect(option).toBeTruthy();
  });

  it("should open and close question drawer", async () => {
    renderQuiz();
    await userEvent.click(screen.getByLabelText("Lista de preguntas"));
    expect(screen.getByText("Pregunta 1")).toBeInTheDocument();
    expect(screen.getByText("Pregunta 2")).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText("Cerrar"));
  });

  it("should finish quiz and show results", async () => {
    renderQuiz();
    await userEvent.click(screen.getByText("b. 4"));
    await userEvent.click(screen.getByText("Siguiente"));
    await userEvent.click(screen.getByText("b. París"));
    await userEvent.click(screen.getByText("Finalizar"));
    expect(screen.getByText("2/2")).toBeInTheDocument();
    expect(screen.getByText("¡Perfecto!")).toBeInTheDocument();
  });

  it("should show results with score when wrong answers given", async () => {
    renderQuiz();
    await userEvent.click(screen.getByText("a. 3"));
    await userEvent.click(screen.getByText("Siguiente"));
    await userEvent.click(screen.getByText("b. París"));
    await userEvent.click(screen.getByText("Finalizar"));
    expect(screen.getByText("1/2")).toBeInTheDocument();
    expect(screen.getByText("Cuestionario completado")).toBeInTheDocument();
  });

  it("should restart quiz", async () => {
    renderQuiz();
    await userEvent.click(screen.getByText("b. 4"));
    await userEvent.click(screen.getByText("Finalizar"));
    await userEvent.click(screen.getByText("Intentar de nuevo"));
    expect(screen.getByText("1 / 2")).toBeInTheDocument();
    expect(screen.getByText(/¿Cuánto es 2\+2\?/)).toBeInTheDocument();
  });

  it("should call onExit when exit button clicked", async () => {
    const onExit = vi.fn();
    renderQuiz({ onExit });
    await userEvent.click(screen.getByLabelText("Salir"));
    expect(onExit).toHaveBeenCalledOnce();
  });
});
