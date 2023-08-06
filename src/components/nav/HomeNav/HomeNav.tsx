"use client";
import Logo from "@/components/image/Logo";
import Mark from "@/components/image/Mark";
import { CONSTANTS_FOR_SCROLLY_ANIMATION } from "@/constants/animations";
import { useIsMediaQuery } from "@/hooks/useIsMediaQuery";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { preXLValue } from "@/constants/styles";
const { navBarWidth, navBarTranslateY } = CONSTANTS_FOR_SCROLLY_ANIMATION;
export default function HomeNav() {
  const isPreXL = useIsMediaQuery(`(min-width: ${preXLValue})`);
  const [width, setWidth] = useState(50);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (isPreXL) {
        // navBarWidth
        setWidth(
          getAnimationValueByScrollY({
            ...navBarWidth,
            scrollY,
          })
        );

        // navBarTranslateY
        setTranslateY(
          getAnimationValueByScrollY({
            ...navBarTranslateY,
            scrollY,
          })
        );
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
