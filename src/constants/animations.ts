import { ScreenKeys } from "./styles";

export const CONSTANTS_FOR_SCROLLY_ANIMATION = {
  screenScaleUp: {
    start: 0,
    end: 100,
    max: 100,
    min: 50,
  },
  screemBottomDown: (start: number) => {
    return {
      start,
      end: start + 500,
      max: 100,
      min: 0,
    };
  },
  formMoveLeft: (start: number) => {
    return {
      start,
      end: start + 700,
      max: 450,
      min: 0,
    };
  },
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
    }
    return {
      start: 0,
      end: 150,
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
    start: 100,
    end: 400,
    max: 100,
    min: 50,
  },
  navBarTranslateY: {
    start: 100,
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
    start: 150,
    end: 350,
    max: 100,
    min: 0,
  },
  heroRightImageTranslateX: (
    imageId: "image1" | "image2" | "image3" | "image4"
  ) => {
    let max = 0;
    switch (imageId) {
      case "image1":
        max = 50;
        break;
      case "image3":
        max = 400;
        break;
      default:
        break;
    }
    return {
      start: 150,
      end: 350,
      max,
      min: 0,
    };
  },
  heroRightImageTranslateY: (
    imageId: "image1" | "image2" | "image3" | "image4"
  ) => {
    let max = 0;
    switch (imageId) {
      case "image1":
        max = 400;
        break;
      case "image4":
        max = 1000;
        break;
      default:
        break;
    }
    return {
      start: 150,
      end: 350,
      max,
      min: 0,
    };
  },
};

export enum ScreenId {
  screen1 = "screen1",
  screen2 = "screen2",
  screen3 = "screen3",
}
