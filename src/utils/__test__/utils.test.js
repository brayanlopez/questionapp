import { describe, it, expect } from "vitest";
import { deleteMathJaxNotation } from "../utils";
import { renderHook } from "@testing-library/react";
import { useCountdown } from "../useCountdown";

describe("deleteMathJaxNotation", () => {
  it("should remove mathjax notation from string", () => {
    const input = "\\( c < 0 \\)";
    const output = deleteMathJaxNotation(input);
    expect(output).not.toContain("$");
  });
});

describe("useCountdown", () => {
  it("should return correct countdown values", () => {
    const now = new Date().getTime();
    const target = now + 1000 * 60 * 60; // 1 hour
    const { result } = renderHook(() => useCountdown(target));
    const [hours, minutes, seconds] = result.current;
    expect(hours).toBeGreaterThanOrEqual(0);
    expect(minutes).toBeGreaterThanOrEqual(0);
    expect(seconds).toBeGreaterThanOrEqual(0);
  });
});
