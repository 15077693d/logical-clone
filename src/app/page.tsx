import HomeNav from "@/components/nav/HomeNav/HomeNav";
import Hero from "@/sections/hero/Hero";
import Screens from "@/sections/screens/Screens";

export default function Home() {
  return (
    <main id="home">
      <HomeNav />
      <Hero />
      <section
        id="hero"
        className="h-[100vh] flex flex-col justify-center bg-black"
      ></section>
      <Screens />
    </main>
  );
}
