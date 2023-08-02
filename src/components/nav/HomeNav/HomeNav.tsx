"use client";
import Logo from "@/components/image/Logo";
import Mark from "@/components/image/Mark";
import { CONSTANTS_FOR_ANIMATE_NAV } from "@/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { preXLValue } from "@/constants/styles";
const { startScrollYForTranslateX, endScrollYForTranslateX, maxTranslateY } =
  CONSTANTS_FOR_ANIMATE_NAV;
export default function HomeNav() {
  const isPreXL = useMediaQuery(`(min-width: ${preXLValue})`);
  const [width, setWidth] = useState(50);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (
        scrollY >= startScrollYForTranslateX &&
        scrollY <= endScrollYForTranslateX &&
        isPreXL
      ) {
        setTranslateY(
          getAnimationValueByScrollY(
            startScrollYForTranslateX,
            endScrollYForTranslateX,
            scrollY,
            maxTranslateY,
            0
          )
        );
        setWidth(
          getAnimationValueByScrollY(
            startScrollYForTranslateX,
            endScrollYForTranslateX,
            scrollY,
            100,
            50
          )
        );
      } else if (scrollY >= startScrollYForTranslateX) {
        setWidth(100);
      } else if (scrollY <= endScrollYForTranslateX) {
        setWidth(50);
      }
    };
    window.addEventListener("scroll", handleScroll, true);
    handleScroll();
    return window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={clsx(
        "preXL:w-[50%]",
        "lg:px-20 lg:py-16",
        "md:p-14",
        "mix-blend-difference w-full flex justify-between items-center fixed px-9 py-7 z-30"
      )}
      style={
        isPreXL
          ? { width: `${width}%`, transform: `translateY(-${translateY}px)` }
          : {}
      }
    >
      <Logo />
      <Mark />
    </header>
  );
}
