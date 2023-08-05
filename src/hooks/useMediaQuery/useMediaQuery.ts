import { ScreenKeys } from "@/constants/styles";
import { useEffect, useState } from "react";

export function useMediaQuery(screenValues: {
  [id in string]: string;
}): ScreenKeys | null {
  const getMatches = (): ScreenKeys | null => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      let curScreen: null | ScreenKeys = null;
      let maxValue = 0;
      const screenItems = Object.entries(screenValues);
      for (let index = 0; index < screenItems.length; index++) {
        const [key, value] = screenItems[index];
        const pixelValue = Number(value.replace("px", ""));
        if (
          window.matchMedia(`(min-width: ${value})`).matches &&
          pixelValue > maxValue
        ) {
          curScreen = key as ScreenKeys;
          maxValue = pixelValue;
        }
      }
      return curScreen;
    }
    return null;
  };

  const [matches, setMatches] = useState<ScreenKeys | null>(getMatches());

  function handleChange() {
    setMatches(getMatches());
  }

  useEffect(() => {
    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return matches;
}
