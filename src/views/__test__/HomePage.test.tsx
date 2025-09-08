import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../HomePage/HomePage.jsx";
import { MemoryRouter } from "react-router-dom";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("HomePage", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("should render the title and button when HomePage is mounted", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Bienvenido a QuestionApp/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Comienza a practicar/i })
    ).toBeInTheDocument();
  });

  it("should render the image when HomePage is mounted", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should navigate to /unal_questions when the button is clicked", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", {
      name: /Comienza a practicar/i,
    });
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/unal_questions");
  });
});
