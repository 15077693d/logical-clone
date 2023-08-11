import Form from "@/components/form/Form";
import Text from "@/components/text/Text";
import { CONSTANTS_FOR_SCROLLY_ANIMATION } from "@/constants/animations";
import { preXLValue } from "@/constants/styles";
import { useIsMediaQuery } from "@/hooks/useIsMediaQuery";
import { getAnimationValueByScrollY } from "@/utils/animation/animation";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
const { formMoveLeft } = CONSTANTS_FOR_SCROLLY_ANIMATION;
export default function Contact() {
  const isPreXL = useIsMediaQuery(`(min-width: ${preXLValue})`);
  const [left, setLeft] = useState<number>(0);
  useEffect(() => {
    const contactElement = document.getElementById("contact");
    const handleScrollY = () => {
      if (isPreXL) {
        const scrollY = window.scrollY;
        const start =
          (contactElement?.offsetTop || 0) -
          (contactElement?.offsetHeight || 0);

        if (start) {
          setLeft(
            getAnimationValueByScrollY({
              ...formMoveLeft(start),
              scrollY,
            })
          );
        }
      }
    };
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [isPreXL]);

  return (
    <div
      id={"contact"}
      className="preXL:flex preXL:items-center preXL:overflow-hidden"
    >
      <div className="preXL:hidden">
        <Text
          heading={<>Get Early Access</>}
          subHeading={
            <>
              Sign up now to secure your place in line, and get notified when we
              launch.
            </>
          }
          height="h-[300px]"
        />
      </div>
      {/** For non moblie */}
      <div className={clsx("hidden w-[70%]", "preXL:block")}>
        <div className="ml-[100px] w-[70%]">
          <h1 className={clsx("font-medium mb-8 w-[90%] text-8xl")}>
            Get Early Access
          </h1>
          <p className={clsx("text-3xl font-light")}>
            Sign up now to secure your place in line, and get notified when we
            launch.
          </p>
        </div>
      </div>
      <div
        className={clsx(
          "bg-center bg-form-right w-full bg-cover",
          "preXL:w-[40%] preXL:h-[100vh] preXL:flex preXL:items-center preXL:relative"
        )}
      >
        <div
          style={
            isPreXL
              ? {
                  // end is -150
                  left: 300 - left,
                }
              : {}
          }
          className={clsx(
            "m-auto max-w-[600px] translate-y-[-50px] w-[80%]",
            "preXL:translate-y-0 preXL:w-[380px]  preXL:absolute"
          )}
        >
          <Form />
        </div>
      </div>
    </div>
  );
}
