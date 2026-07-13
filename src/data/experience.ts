export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Freelance & Contract",
    role: "Software Engineer",
    period: "2022 — Present",
    description: "Delivering fullstack web and mobile solutions for clients across various industries.",
    highlights: [
      "Built production-ready apps with Next.js, TypeScript, and Flutter",
      "Designed RESTful APIs and integrated third-party services",
      "Deployed and maintained applications on Vercel and cloud platforms",
    ],
  },
  {
    id: "exp-2",
    company: "Software Development Projects",
    role: "Fullstack Developer",
    period: "2020 — 2022",
    description: "Developed web applications and mobile apps with modern JavaScript and Dart ecosystems.",
    highlights: [
      "Created responsive dashboards and landing pages with React",
      "Implemented state management and real-time features",
      "Collaborated on architecture decisions and code reviews",
    ],
  },
  {
    id: "exp-3",
    company: "Personal & Open Source",
    role: "Developer",
    period: "2019 — Present",
    description: "Continuous learning through side projects and open-source contributions on GitHub.",
    highlights: [
      "Maintained 20+ repositories spanning web, mobile, and backend",
      "Explored GraphQL, microservices, and cloud-native patterns",
      "Built portfolio and experimental projects to sharpen skills",
    ],
  },
];
