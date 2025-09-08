import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ErrorPage from "../ErrorPage.jsx";
import { MemoryRouter } from "react-router-dom";

describe("ErrorPage", () => {
  it("should render error message", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(document.body.textContent).toMatch(/404|error/i);
  });
});
