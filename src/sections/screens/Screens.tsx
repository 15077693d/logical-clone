"use client";
import {
  CONSTANTS_FOR_SCROLLY_ANIMATION,
  ScreenId,
} from "@/constants/animations";
import { SCREENS_VALUES, preXLValue } from "@/constants/styles";
import { useIsMediaQuery } from "@/hooks/useIsMediaQuery";
import { useMediaQuery } from "@/hooks/useMediaQuery/useMediaQuery";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import { getScreenImgScale } from "@/utils/screen";
import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import "./Screens.css";
const { screenBottomUp, screenScaleUp, screemBottomDown } =
  CONSTANTS_FOR_SCROLLY_ANIMATION;
export default function Screens({
  activeScreenId,
}: {
  activeScreenId: ScreenId;
}) {
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

  useEffect(() => {
    const screemBottomDownMarkElement = document.getElementById(
      "screemBottomDown-mark"
    );
    const handleScrollY = () => {
      // screenBottomUp
      const scrollY = window.scrollY;
      const start = screemBottomDownMarkElement?.offsetTop;
      if (start && scrollY >= start) {
        setBottom(
          -1 *
            getAnimationValueByScrollY({
              ...screemBottomDown(start),
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
  }, [screenBottomUpFromScreening]);
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
              width: "100%",
              height: "100%",
            }
      }
      className={clsx("fixed z-20")}
    >
      {Object.values(ScreenId).map((screenId) => (
        <img
          key={`screens_${screenId}`}
          className="bottom-0  left-0 absolute transition-screens"
          alt="screen1"
          src={`images/${screenId}/${scale}.png`}
          style={
            activeScreenId !== screenId ? { transform: "translateY(100%)" } : {}
          }
        />
      ))}
    </div>
  );
}
