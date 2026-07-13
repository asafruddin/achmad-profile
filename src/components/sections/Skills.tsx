import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Skills"
            title="Technologies I work with"
            subtitle="A toolkit spanning frontend, backend, mobile, and the tools that tie it all together."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isWide = category.span === "wide";

            return (
              <Reveal key={category.id} delay={index * 80}>
                <Card
                  hover
                  className={`h-full ${isWide ? "md:col-span-2 lg:col-span-3" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent-light">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
