"use client";
import Logo from "@/components/image/Logo";
import Mark from "@/components/image/Mark";
import { CONSTANTS_FOR_ANIMATE_NAV } from "@/constants";
import resolveConfig from "tailwindcss/resolveConfig";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { lgValue } from "@/constants/styles";
const { startScrollYForTranslateX, endScrollYForTranslateX } =
  CONSTANTS_FOR_ANIMATE_NAV;

export default function HomeNav() {
  const isLg = useMediaQuery(`(min-width: ${lgValue})`);
  const [width, setWidth] = useState(50);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (
        scrollY >= startScrollYForTranslateX &&
        scrollY <= endScrollYForTranslateX &&
        isLg
      ) {
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
        "lg:w-[50%]",
        "mix-blend-difference w-full flex justify-between items-center fixed p-12"
      )}
      style={isLg ? { width: `${width}%` } : {}}
    >
      <Logo />
      <Mark />
    </header>
  );
}
