import { renderHook } from "@testing-library/react";
import { useMediaQuery } from "./useMediaQuery";

describe("useMediaQuery", () => {
  it("should return null when window object is not available", () => {
    const { result } = renderHook(() => useMediaQuery({}));

    expect(result.current).toBeNull();
  });

  it("should return the correct screen key when window matches the media query", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === "(min-width: 768px)",
      })),
    });

    const { result } = renderHook(() =>
      useMediaQuery({
        small: "768px",
        medium: "992px",
        large: "1200px",
      })
    );

    expect(result.current).toEqual("small");
  });

  it("should return null when none of the media queries match", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
      })),
    });

    const { result } = renderHook(() =>
      useMediaQuery({
        small: "768px",
        medium: "992px",
        large: "1200px",
      })
    );

    expect(result.current).toBeNull();
  });
});
