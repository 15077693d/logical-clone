import { ScreenKeys } from "@/constants/styles";

export const getScreenImgScale = (screen: ScreenKeys | null) => {
  let scale = "small";
  switch (screen) {
    case ScreenKeys.preLG:
    case ScreenKeys.lg:
      scale = "middle";
      break;
    case ScreenKeys.preXL:
    case ScreenKeys.xl:
    case ScreenKeys["2xl"]:
      scale = "big";
      break;
  }
  return scale;
};
