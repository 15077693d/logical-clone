import { ScreenKeys } from "./styles";

export const CONSTANTS_FOR_SCROLLY_ANIMATION = {
  screenBottomUp: (screen: ScreenKeys | null) => {
    // max value: height of the end of the scroll
    // min value: inital bottom
    let min = -10;
    switch (screen) {
      case ScreenKeys.sm:
      case ScreenKeys.md:
      case ScreenKeys.preLG:
        min = -20;
        break;
      case ScreenKeys.lg:
        min = -30;
        break;
      case ScreenKeys.preXL:
        min = -10;
        break;
    }
    return {
      start: 0,
      end: 100,
      max: 0,
      min,
    };
  },
  markRotate: {
    start: 50,
    end: 400,
    max: 1,
    min: 0,
  },
  markScale: {
    start: 50,
    end: 400,
    max: 0.25,
    min: 0,
  },
  navBarWidth: {
    start: 50,
    end: 400,
    max: 100,
    min: 50,
  },
  navBarTranslateY: {
    start: 50,
    end: 400,
    max: 30,
    min: 0,
  },
  logoColor: {
    start: 200,
  },
  logoScale: {
    start: 50,
    end: 400,
    max: 0.25,
    min: 0,
  },
  logoTranslateX: {
    start: 50,
    end: 400,
    max: 30,
    min: 0,
  },
  heroSectionLeftRightOpacity: {
    start: 0,
    end: 100,
    max: 1,
    min: 0,
  },
  heroSectionTranslateY: {
    start: 100,
    end: 300,
    max: 100,
    min: 0,
  },
};
