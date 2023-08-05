import clsx from "clsx";
import React from "react";

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
  return (
    <div
      id="right"
      className={clsx("w-[50%] h-[100%] relative hidden", "preXL:block")}
    >
      <img
        src="images/env-card.png"
        alt="env-card"
        className="absolute left-[-100px] top-[25%] z-20 h-[349px]"
      />
      <div
        style={{ opacity }}
        className="bg-grayForHeroRight w-full h-full absolute left-0 z-10"
      />
    </div>
  );
}
