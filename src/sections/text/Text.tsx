import clsx from "clsx";
import React, { ReactElement } from "react";
export type IProps = {
  heading: ReactElement;
  subHeading: ReactElement;
};
export default function Text({ heading, subHeading }: IProps) {
  return (
    <section className="h-[100vh] bg-grayForBackground">
      <div className="z-20 text-center">
        <h1
          className={clsx(
            "m-auto font-medium text-6xl mb-8 w-[90%]",
            "md:text-7xl",
            "lg:text-7xl",
            "preXL:text-8xl "
          )}
        >
          {heading}
        </h1>
        <p
          className={clsx(
            "preXL:w-[100%] preXL:text-3xl preXL:ml-0",
            "lg:w-[90%]",
            "md:w-[70%] md:text-2xl",
            "m-auto text-xl font-light w-[90%]"
          )}
        >
          {subHeading}
        </p>
      </div>
    </section>
  );
}
