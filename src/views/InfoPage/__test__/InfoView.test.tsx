import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InfoView from "../Info.view.js";

describe("InfoView", () => {
  it("should render info page", () => {
    render(<InfoView />);
    expect(screen.getByText(/Preguntas frecuentes/i)).toBeDefined();
  });
});
