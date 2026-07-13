import { Monitor, Server, Smartphone, Wrench } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export type SkillCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
  span?: "default" | "wide";
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "Prisma"],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "React Native", "Android", "iOS"],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: Wrench,
    span: "wide",
    skills: ["Git", "Docker", "CI/CD", "Vercel", "Figma", "Linux", "Jest"],
  },
];
