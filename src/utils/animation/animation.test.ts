import { getAnimationValueByScrollY } from "./animation";

describe("getAnimationValueByScrollY", () => {
  it("returns the correct animation value", () => {
    const start = 0;
    const end = 100;
    const scrollY = 50;
    const max = 10;
    const min = 0;

    const expectedValue = 5; // calculate the expected value manually

    const result = getAnimationValueByScrollY({
      start,
      end,
      scrollY,
      max,
      min,
    });

    expect(result).toBe(expectedValue);
  });
  it("returns the correct animation value", () => {
    const start = 10;
    const end = 200;
    const scrollY = 50;
    const max = 300;
    const min = 20;

    const expectedValue = 78.94736842105263; // calculate the expected value manually

    const result = getAnimationValueByScrollY({
      start,
      end,
      scrollY,
      max,
      min,
    });

    expect(result).toBe(expectedValue);
  });
});
