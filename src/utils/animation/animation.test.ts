import { getAnimationValueByScrollY } from "./animation";

describe("getAnimationValueByScrollY", () => {
  it("returns the correct animation value", () => {
    const startScrollY = 0;
    const endScrollY = 100;
    const currentScrollY = 50;
    const maxAnimationValue = 10;
    const minAnimationValue = 0;

    const expectedValue = 5; // calculate the expected value manually

    const result = getAnimationValueByScrollY(
      startScrollY,
      endScrollY,
      currentScrollY,
      maxAnimationValue,
      minAnimationValue
    );

    expect(result).toBe(expectedValue);
  });
  it("returns the correct animation value", () => {
    const startScrollY = 10;
    const endScrollY = 200;
    const currentScrollY = 50;
    const maxAnimationValue = 300;
    const minAnimationValue = 20;

    const expectedValue = 78.94736842105263; // calculate the expected value manually

    const result = getAnimationValueByScrollY(
      startScrollY,
      endScrollY,
      currentScrollY,
      maxAnimationValue,
      minAnimationValue
    );

    expect(result).toBe(expectedValue);
  });
});
