"use client";
import React, { useEffect, useState } from "react";
import { HeroLeft, HeroRight } from "./Hero.elements";
import clsx from "clsx";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import { CONSTANTS_FOR_ANIMATE_NAV } from "@/constants";
const { endScrollYForOpacity, startScrollYForTranslateX } =
  CONSTANTS_FOR_ANIMATE_NAV;

export default function Hero() {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 0 && scrollY <= endScrollYForOpacity) {
        setOpacity(
          1 - getAnimationValueByScrollY(0, endScrollYForOpacity, scrollY, 1, 0)
        );
      } else if (scrollY >= endScrollYForOpacity) {
        setOpacity(0);
      } else if (scrollY <= 0) {
        setOpacity(1);
      }
    };
    window.addEventListener("scroll", handleScroll, true);
    handleScroll();
    return window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="hero" className={clsx("h-[100vh]", "preXL:flex")}>
      <HeroLeft opacity={opacity} />
      <HeroRight opacity={opacity} />
    </section>
  );
}
