import clsx from "clsx";
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="h-[100vh] flex flex-col justify-center">
      <div
        id="left"
        className={clsx(
          "preXL:text-left preXL:w-[50%] preXL:pl-20",
          "text-center"
        )}
      >
        <h1
          className={clsx(
            "m-auto font-medium text-6xl mb-8 w-[90%]",
            "md:text-7xl",
            "lg:w-[90%] lg:text-7xl",
            "preXL:text-8xl preXL:ml-0"
          )}
        >
          Build Better Backends
        </h1>
        <p
          className={clsx(
            "preXL:w-[100%] preXL:text-3xl preXL:ml-0",
            "lg:w-[80%]",
            "md:w-[70%] md:text-2xl",
            "m-auto text-xl font-light w-[80%]"
          )}
        >
          The only platform that gives AI the ability to autonomously build web
          services.
        </p>
      </div>
    </section>
  );
}
