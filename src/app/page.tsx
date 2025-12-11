import Particles from "@/components/background/particle-background";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";

export default function Page() {
  return (
    <main className="relative w-full min-h-screen font-sans bg-black text-white overflow-x-hidden">
      <Navbar />
      <div className="fixed inset-0 z-0">
         <Particles
            particleColors={["#ffffff", "#10b981"]}
            particleCount={1000}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
      </div>

      <Hero />
      <Works />
      <Contact />
    </main>
  );
}
