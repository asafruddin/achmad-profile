"use client";

import Magnet from "@/components/container/magnet";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = profile.cvPath;
    link.download = profile.cvFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center section-padding z-10"
    >
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="flex flex-col gap-6 items-start">
              <p className="text-sm md:text-base text-accent font-medium tracking-widest uppercase">
                Hi there, I am
              </p>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
                {profile.name}
              </h1>

              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-normal text-neutral-400 leading-relaxed">
                  <span className="font-bold text-accent-light">{profile.title}</span>{" "}
                  building fullstack web &amp; mobile products.
                </h2>
                <p className="text-lg text-neutral-500 max-w-xl leading-relaxed">
                  {profile.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button href="#works" variant="primary">
                  View Projects
                </Button>
                <Magnet padding={40} magnetStrength={3}>
                  <Button variant="secondary" onClick={handleDownload}>
                    Download CV
                  </Button>
                </Magnet>
              </div>

              <div className="flex flex-wrap gap-8 pt-6 border-t border-neutral-800/50 w-full">
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="hidden lg:block">
            <div className="glass-card p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-neutral-500 text-xs">stack.ts</span>
              </div>
              <pre className="text-neutral-300 leading-relaxed">
                <code>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-accent-light">engineer</span> = {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">name</span>:{" "}
                  <span className="text-amber-300">&quot;{profile.name}&quot;</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">role</span>:{" "}
                  <span className="text-amber-300">&quot;{profile.title}&quot;</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">stack</span>: [
                  {"\n"}
                  {profile.stack.map((tech, i) => (
                    <span key={tech}>
                      {"    "}
                      <span className="text-amber-300">&quot;{tech}&quot;</span>
                      {i < profile.stack.length - 1 ? "," : ""}
                      {"\n"}
                    </span>
                  ))}
                  {"  "}],
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">focus</span>: [
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">&quot;performance&quot;</span>,{"\n"}
                  {"    "}
                  <span className="text-amber-300">&quot;clean code&quot;</span>,{"\n"}
                  {"    "}
                  <span className="text-amber-300">&quot;user experience&quot;</span>
                  {"\n"}
                  {"  "}]
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-neutral-500 hover:text-accent-light transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </div>
  );
}
