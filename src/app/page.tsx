"use client";
import HomeNav from "@/components/nav/HomeNav/HomeNav";
import { ScreenId } from "@/constants/animations";
import Hero from "@/sections/hero/Hero";
import Text from "@/sections/text/Text";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Screens = dynamic(() => import("@/sections/screens/Screens"), {
  ssr: false,
});

export default function Home() {
  const [activeScreenId, setActiveScreenId] = useState<ScreenId>(
    ScreenId.screen1
  );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newActiveScreenId = entry.target
            .getAttribute("id")
            ?.split("-")?.[0];
          if (newActiveScreenId) {
            setActiveScreenId(newActiveScreenId as ScreenId);
            console.log(newActiveScreenId);
          }
        }
      });
    });
    Object.values(ScreenId).forEach((screenId) => {
      const screenMark = document.getElementById(`${screenId}-Mark`);
      if (screenMark != null) {
        observer.observe(screenMark);
      }
    });

    return () => observer.disconnect();
  }, []);
  return (
    <main id="home">
      <HomeNav />
      <Hero />
      <div id={`${ScreenId.screen1}-Mark`} />
      <Text
        heading={<>Completely Visual</>}
        subHeading={
          <>Never touch the command line, from provision to production.</>
        }
      />
      <div id={`${ScreenId.screen2}-Mark`} />
      <Text
        heading={<>Full Stack</>}
        subHeading={
          <>
            Never manage infrastructure again.
            <br /> One click gets you: a database, APIs, deployments, hosting,
            etc.
          </>
        }
      />
      <div id={`${ScreenId.screen3}-Mark`} />

      <Text
        heading={<>Launch Faster</>}
        subHeading={
          <>Logical can get systems to market in minutes instead of weeks.</>
        }
      />
      <Screens activeScreenId={activeScreenId} />
    </main>
  );
}
