import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import ErrorPage from "../ErrorPage";

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <MemoryRouter>
      <ThemeProvider theme={createTheme()}>{ui}</ThemeProvider>
    </MemoryRouter>,
  );

describe("ErrorPage", () => {
  it("should render 404 message", () => {
    renderWithProviders(<ErrorPage />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText(/Ooops/i)).toBeInTheDocument();
  });

  it("should render navigation buttons", () => {
    renderWithProviders(<ErrorPage />);
    expect(
      screen.getByRole("button", { name: /ir al inicio/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /volver atrás/i }),
    ).toBeInTheDocument();
  });
});
