import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
export const lgValue = (
  resolveConfig(tailwindConfig).theme?.screens as { lg: string }
)?.["lg"];
