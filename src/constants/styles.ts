import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
export const preXLValue = (
  resolveConfig(tailwindConfig).theme?.screens as { preXL: string }
)?.["preXL"];
