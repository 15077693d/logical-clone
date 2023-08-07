import { CONSTANTS_FOR_SCROLLY_ANIMATION } from "@/constants/animations";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
const { heroRightImageTranslateX, heroRightImageTranslateY } =
  CONSTANTS_FOR_SCROLLY_ANIMATION;
export function HeroLeft({ opacity }: { opacity: number }) {
  return (
    <div
      id="left"
      className={clsx(
        "preXL:text-left preXL:w-[50%] preXL:pl-20",
        "text-center h-[100%] w-full flex items-center justify-center relative"
      )}
    >
      <div className="z-20">
        <h1
          className={clsx(
            "m-auto font-medium text-6xl mb-8 w-[90%]",
            "md:text-7xl",
            "lg:text-7xl",
            "preXL:text-8xl preXL:ml-0"
          )}
        >
          Build Better Backends
        </h1>
        <p
          className={clsx(
            "preXL:w-[100%] preXL:text-3xl preXL:ml-0",
            "lg:w-[90%]",
            "md:w-[70%] md:text-2xl",
            "m-auto text-xl font-light w-[80%]"
          )}
        >
          The only platform that gives AI the ability to autonomously build web
          services.
        </p>
      </div>
      <div
        style={{ opacity }}
        className={clsx("bg-grayForHeroLeft h-full w-full absolute left-0")}
      />
    </div>
  );
}

export function HeroRight({ opacity }: { opacity: number }) {
  const [imagesTranslateX, setImagesTranslateX] = useState({
    image1: 0,
    image2: 0,
    image3: 0,
    image4: 0,
  });
  const [imagesTranslateY, setImagesTranslateY] = useState({
    image1: 0,
    image2: 0,
    image3: 0,
    image4: 0,
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setImagesTranslateX({
        image1: getAnimationValueByScrollY({
          scrollY,
          ...heroRightImageTranslateX("image1"),
        }),
        image2: getAnimationValueByScrollY({
          scrollY,
          ...heroRightImageTranslateX("image2"),
        }),
        image3: getAnimationValueByScrollY({
          scrollY,
          ...heroRightImageTranslateX("image3"),
        }),
        image4: getAnimationValueByScrollY({
          scrollY,
          ...heroRightImageTranslateX("image4"),
        }),
      });
      setImagesTranslateY({
        image1: getAnimationValueByScrollY({
          scrollY,
          ...heroRightImageTranslateY("image1"),
        }),
        image2: getAnimationValueByScrollY({
          scrollY,
          ...heroRightImageTranslateY("image2"),
        }),
        image3: getAnimationValueByScrollY({
          scrollY,
          ...heroRightImageTranslateY("image3"),
        }),
        image4: getAnimationValueByScrollY({
          scrollY,
          ...heroRightImageTranslateY("image4"),
        }),
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="right"
      className={clsx("w-[50%] h-[100%] relative hidden", "preXL:block")}
    >
      <img
        src="images/image1.png"
        alt="image1"
        style={{
          transform: `translateX(-${imagesTranslateX["image1"]}px) translateY(-${imagesTranslateY["image1"]}px)`,
        }}
        className="absolute left-[-100px] top-[25%] z-20 h-[349px] transition-all"
      />
      <img
        src="images/image2.png"
        alt="image2"
        style={{
          transform: `translateX(${imagesTranslateX["image2"]}px) translateY(${imagesTranslateY["image2"]}px)`,
        }}
        className="absolute left-[140px] top-[-60px] z-20 min-w-[680px] w-[680px] min-h-[328px] h-[328px] transition-all"
      />
      <img
        src="images/image3.png"
        alt="image3"
        style={{
          transform: `translateX(${imagesTranslateX["image3"]}px) translateY(${imagesTranslateY["image3"]}px)`,
        }}
        className="absolute right-[-80px] bottom-[-100px] z-20 w-[400px] transition-all"
      />
      <img
        src="images/image4.png"
        alt="image4"
        style={{
          transform: `translateX(${imagesTranslateX["image4"]}px) translateY(-${imagesTranslateY["image4"]}px)`,
        }}
        className="absolute left-[0px] bottom-[-170px] z-20 w-[450px] transition-all"
      />
      <div
        style={{ opacity }}
        className="bg-grayForHeroRight w-full h-full absolute left-0 z-10"
      />
    </div>
  );
}
