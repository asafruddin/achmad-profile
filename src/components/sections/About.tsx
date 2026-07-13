import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding relative z-10 bg-neutral-950/50">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="About"
            title="Crafting digital experiences end to end"
            subtitle="From pixel-perfect interfaces to robust backend APIs — I bring ideas to life across the stack."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal delay={100}>
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-accent/20 via-neutral-900 to-neutral-950 border border-neutral-800 flex items-center justify-center">
                <span className="font-display text-8xl font-black text-white/10 select-none">
                  {profile.initials}
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-xl border border-accent/20 -z-10" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-6">
              <p className="text-lg text-neutral-400 leading-relaxed">{profile.bio}</p>

              <ul className="space-y-4">
                {profile.values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{value}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-neutral-500">
                Based in {profile.location} · Open to remote opportunities
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
