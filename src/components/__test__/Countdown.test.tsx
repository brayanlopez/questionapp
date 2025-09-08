import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Countdown from "../../components/countdown.component.jsx";

describe("Countdown", () => {
  it("should render hours, minutes, and seconds", () => {
    render(<Countdown />);
    expect(screen.getByText(/horas/i)).toBeInTheDocument();
    expect(screen.getByText(/minutos/i)).toBeInTheDocument();
    expect(screen.getByText(/segundos/i)).toBeInTheDocument();
  });
});
