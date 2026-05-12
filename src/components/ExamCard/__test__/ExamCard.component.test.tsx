import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createTheme, ThemeProvider } from "@mui/material";

import ExamCard from "../ExamCard.component";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={createTheme()}>{ui}</ThemeProvider>);

describe("ExamCard", () => {
  const defaultProps = {
    title: "Examen de prueba",
    questionCount: 10,
    category: "Aritmética",
    accentColor: "primary" as const,
    onClick: vi.fn(),
  };

  it("should render the title", () => {
    renderWithTheme(<ExamCard {...defaultProps} />);
    expect(screen.getByText("Examen de prueba")).toBeInTheDocument();
  });

  it("should render singular 'pregunta' when count is 1", () => {
    renderWithTheme(<ExamCard {...defaultProps} questionCount={1} />);
    expect(screen.getByText("1 pregunta")).toBeInTheDocument();
  });

  it("should render plural 'preguntas' when count is greater than 1", () => {
    renderWithTheme(<ExamCard {...defaultProps} questionCount={5} />);
    expect(screen.getByText("5 preguntas")).toBeInTheDocument();
  });

  it("should call onClick when clicked", async () => {
    const onClick = vi.fn();
    renderWithTheme(<ExamCard {...defaultProps} onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render the Aritmética icon for the Aritmética category", () => {
    const { container } = renderWithTheme(
      <ExamCard {...defaultProps} category="Aritmética" />,
    );
    const lines = container.querySelectorAll("line");
    expect(lines.length).toBeGreaterThan(0);
  });

  it("should render the Álgebra icon for the Álgebra category", () => {
    const { container } = renderWithTheme(
      <ExamCard {...defaultProps} category="Álgebra" />,
    );
    const paths = container.querySelectorAll("path");
    expect(paths.length).toBeGreaterThan(0);
  });

  it("should render the default icon for an unknown category", () => {
    const { container } = renderWithTheme(
      <ExamCard {...defaultProps} category="Geometría" />,
    );
    const circles = container.querySelectorAll("circle");
    expect(circles.length).toBeGreaterThan(0);
  });
});
