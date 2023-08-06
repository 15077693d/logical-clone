"use client";
import { CONSTANTS_FOR_SCROLLY_ANIMATION } from "@/constants";
import { SCREENS_VALUES, preXLValue } from "@/constants/styles";
import { useIsMediaQuery } from "@/hooks/useIsMediaQuery";
import { useMediaQuery } from "@/hooks/useMediaQuery/useMediaQuery";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import { getScreenImgScale } from "@/utils/screen";
import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
const { screenBottomUp, screenScaleUp } = CONSTANTS_FOR_SCROLLY_ANIMATION;
export default function Screens() {
  const screen = useMediaQuery(SCREENS_VALUES);
  const isPreXL = useIsMediaQuery(`(min-width: ${preXLValue})`);
  const scale = useMemo(() => {
    return getScreenImgScale(screen);
  }, [screen]);
  const screenBottomUpFromScreening = screenBottomUp(screen);
  const [bottom, setBottom] = useState(screenBottomUpFromScreening.min);
  const [width, setWidth] = useState(screenScaleUp.min);

  useEffect(() => {
    const handleScrollY = () => {
      // screenBottomUp
      const scrollY = window.scrollY;

      setBottom(
        getAnimationValueByScrollY({
          ...screenBottomUpFromScreening,
          scrollY,
        })
      );

      // screenScaleUp
      if (isPreXL) {
        setWidth(
          getAnimationValueByScrollY({
            ...screenScaleUp,
            scrollY,
          })
        );
      }
    };
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [isPreXL, screenBottomUpFromScreening]);
  return (
    <div
      id="screen"
      style={
        isPreXL
          ? {
              bottom: `${bottom}%`,
              left: 0,
              width: `${width}%`,
            }
          : {
              bottom: `${bottom}%`,
              left: 0,
            }
      }
      className={clsx("fixed z-20 transition-all")}
    >
      <img alt="screen1" src={`images/screen1/${scale}.png`} />
    </div>
  );
}
