"use client";
import React, { useEffect, useState } from "react";
import { HeroLeft, HeroRight } from "./Hero.elements";
import clsx from "clsx";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import { CONSTANTS_FOR_SCROLLY_ANIMATION } from "@/constants";
import { useIsMediaQuery } from "@/hooks/useIsMediaQuery";
import { preXLValue } from "@/constants/styles";
const { heroSectionLeftRightOpacity, heroSectionTranslateY } =
  CONSTANTS_FOR_SCROLLY_ANIMATION;

export default function Hero() {
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const isPreXL = useIsMediaQuery(`(min-width: ${preXLValue})`);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // heroSectionLeftRightOpacityWhenScrollY
      setOpacity(
        1 -
          getAnimationValueByScrollY({
            ...heroSectionLeftRightOpacity,
            scrollY,
          })
      );

      // heroSectionTranslateYWhenScrollY
      setTranslateY(
        getAnimationValueByScrollY({
          ...heroSectionTranslateY,
          scrollY,
        })
      );
    };
    window.addEventListener("scroll", handleScroll, true);
    handleScroll();
    return window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      id="hero"
      className={clsx(
        "h-[100vh] w-[100%] overflow-hidden",
        "preXL:flex",
        "preXL:sticky preXL:top-0"
      )}
      style={isPreXL ? { transform: `translateY(-${translateY}%)` } : {}}
    >
      <HeroLeft opacity={opacity} />
      <HeroRight opacity={opacity} />
    </section>
  );
}
