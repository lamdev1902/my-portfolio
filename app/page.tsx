import Image from "next/image";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Contact from "@/components/home/Contact";
import Project from "@/components/home/Project";

export default function Home() {
  return (
    <main>
      <div className="container max-w-[1000px] mx-auto px-6">
        <Hero />
        <Experience />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
