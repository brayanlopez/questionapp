import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MainView from "../main.view";

describe("MainView", () => {
  it("should render NavigationComponent and Outlet", () => {
    const { container } = render(
      <MemoryRouter>
        <MainView />
      </MemoryRouter>,
    );
    expect(container.querySelector(".main-container")).toBeInTheDocument();
  });
});
