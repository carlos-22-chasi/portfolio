import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className="container mx-auto py-4 mt-24">
        <HeroSection/>
      </div>
    </main>
  );
}
