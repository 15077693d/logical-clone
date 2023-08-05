import HomeNav from "@/components/nav/HomeNav/HomeNav";
import Hero from "@/sections/hero/Hero";
import Text from "@/sections/text/Text";
import dynamic from "next/dynamic";

const Screens = dynamic(() => import("@/sections/screens/Screens"), {
  ssr: false,
});

export default function Home() {
  return (
    <main id="home">
      <HomeNav />
      <Hero />
      <Text
        heading={<>Completely Visual</>}
        subHeading={
          <>Never touch the command line, from provision to production.</>
        }
      />
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
      <Text
        heading={<>Launch Faster</>}
        subHeading={
          <>Logical can get systems to market in minutes instead of weeks.</>
        }
      />
      <Screens />
    </main>
  );
}
