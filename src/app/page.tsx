import HomeNav from "@/components/nav/HomeNav/HomeNav";
import Hero from "@/sections/hero/Hero";

export default function Home() {
  return (
    <main id="home">
      <HomeNav />
      <Hero />
      <section
        id="hero"
        className="h-[100vh] flex flex-col justify-center"
      ></section>
    </main>
  );
}
