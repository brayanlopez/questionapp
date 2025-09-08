import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationComponent from "../Navigation.component";

describe("NavigationComponent", () => {
  it("should render menu icon and title", () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <NavigationComponent onClickBackButton={() => {}} />
      </MemoryRouter>
    );
    expect(getByLabelText(/open drawer/i)).toBeInTheDocument();
    expect(getByText(/QuestionApp/i)).toBeInTheDocument();
  });
});
