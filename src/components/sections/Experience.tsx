import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10 bg-neutral-950/50">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Experience"
            title="Where I've built & grown"
            subtitle="A journey through fullstack development, from side projects to production applications."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-neutral-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 100}>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 border-accent bg-neutral-950" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-accent-light font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-neutral-500 font-mono shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-neutral-400 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-neutral-500 flex gap-2"
                      >
                        <span className="flex h-5 shrink-0 items-center text-accent leading-none">
                          ▸
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
