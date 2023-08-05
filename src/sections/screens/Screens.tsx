"use client";
import { CONSTANTS_FOR_SCROLLY_ANIMATION } from "@/constants";
import { SCREENS_VALUES } from "@/constants/styles";
import { useMediaQuery } from "@/hooks/useMediaQuery/useMediaQuery";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import { getScreenImgScale } from "@/utils/screen";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
const { screenBottomUp } = CONSTANTS_FOR_SCROLLY_ANIMATION;
export default function Screens() {
  const screen = useMediaQuery(SCREENS_VALUES);
  const screenBottomUpFromScreening = screenBottomUp(screen);
  const [bottom, setBottom] = useState(screenBottomUpFromScreening.min);
  useEffect(() => {
    const handleScrollY = () => {
      // screenBottomUp
      const scrollY = window.scrollY;
      if (scrollY >= screenBottomUpFromScreening.end) {
        setBottom(screenBottomUpFromScreening.max);
      } else if (scrollY > screenBottomUpFromScreening.start) {
        setBottom(
          getAnimationValueByScrollY({
            ...screenBottomUpFromScreening,
            scrollY,
          })
        );
      } else if (scrollY <= screenBottomUpFromScreening.start) {
        setBottom(screenBottomUpFromScreening.min);
      }
    };
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [screenBottomUpFromScreening]);
  return (
    <div
      id="screen"
      style={{
        bottom: `${bottom}%`,
      }}
      className={clsx("fixed z-20", "preXL:w-[50%]")}
    >
      <img
        alt="screen1"
        src={`images/screen1/${getScreenImgScale(screen)}.png`}
      />
    </div>
  );
}
