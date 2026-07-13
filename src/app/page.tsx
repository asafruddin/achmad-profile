import Particles from "@/components/background/particle-background";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="relative w-full min-h-screen font-sans bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#10b981"]}
          particleCount={600}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
