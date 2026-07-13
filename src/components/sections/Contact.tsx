import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    description: "Best for project inquiries",
  },
  {
    label: "GitHub",
    value: "asafruddin",
    href: profile.github,
    icon: Github,
    description: "See my code & contributions",
  },
  {
    label: "LinkedIn",
    value: "Achmad Safruddin",
    href: profile.linkedin,
    icon: Linkedin,
    description: "Connect professionally",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative z-10 bg-neutral-950/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Contact"
              title="Let's build something great"
              subtitle="Currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect — I'd love to hear from you."
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      method.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex items-center gap-4 p-5 glass-card hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-neutral-500">{method.label}</p>
                      <p className="text-white font-medium truncate">{method.value}</p>
                      <p className="text-xs text-neutral-600 mt-0.5">
                        {method.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-accent-light transition-colors shrink-0" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
