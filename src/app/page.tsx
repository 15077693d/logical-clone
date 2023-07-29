import HomeNav from "@/components/nav/HomeNav/HomeNav";

export default function Home() {
  return (
    <main id="home" className="h-[200vh] bg-gray">
      <HomeNav />

      <div className="h-[200px] w-[80vw]"></div>
      <div className="bg-[black] h-[200px] w-[80vw]"></div>
    </main>
  );
}
