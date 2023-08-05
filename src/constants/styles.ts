import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
export const preXLValue = (
  resolveConfig(tailwindConfig).theme?.screens as { preXL: string }
)?.["preXL"];
export const mdValue = (
  resolveConfig(tailwindConfig).theme?.screens as { md: string }
)?.["md"];

export const SCREENS_VALUES = resolveConfig(tailwindConfig).theme?.screens as {
  [id in string]: string;
};

export enum ScreenKeys {
  "sm" = "sm",
  "md" = "md",
  "preLG" = "preLG",
  "lg" = "lg",
  "preXL" = "preXL",
  "xl" = "xl",
  "2xl" = "2xl",
}
