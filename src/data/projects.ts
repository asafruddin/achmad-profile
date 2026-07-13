export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    id: "siaga-bunda",
    title: "Siaga Bunda",
    description:
      "A fullstack health monitoring platform built with TypeScript, featuring real-time data tracking and a modern responsive interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/asafruddin/siaga-bunda",
    gradient: "from-emerald-600/30 to-teal-900/50",
    featured: true,
  },
  {
    id: "diamom-project",
    title: "Diamom Project",
    description:
      "Fullstack application with a deployed API backend and frontend, demonstrating end-to-end product development and deployment.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    githubUrl: "https://github.com/asafruddin/diamom-project",
    liveUrl: "https://diamom-project-api.vercel.app",
    gradient: "from-violet-600/30 to-indigo-900/50",
    featured: true,
  },
  {
    id: "better-social",
    title: "Better Social",
    description:
      "A social feed application showcasing modern frontend patterns, component architecture, and interactive UI design.",
    tech: ["TypeScript", "React", "Next.js"],
    githubUrl: "https://github.com/asafruddin/better-social-test-achmad",
    gradient: "from-blue-600/30 to-cyan-900/50",
    featured: true,
  },
  {
    id: "erp-landing",
    title: "ERP Landing Page",
    description:
      "A polished marketing landing page for an ERP product, focused on conversion-oriented design and performance.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/asafruddin/erp-landing-page",
    gradient: "from-amber-600/30 to-orange-900/50",
    featured: true,
  },
  {
    id: "notes-apps",
    title: "Notes App",
    description:
      "A note-taking application with clean UX, demonstrating CRUD operations and local state management.",
    tech: ["TypeScript", "React"],
    githubUrl: "https://github.com/asafruddin/notes-apps",
    gradient: "from-rose-600/30 to-pink-900/50",
    featured: true,
  },
  {
    id: "flutter-graphql",
    title: "Flutter GraphQL",
    description:
      "Mobile app architecture using Flutter and GraphQL, exploring scalable patterns for cross-platform development.",
    tech: ["Flutter", "Dart", "GraphQL"],
    githubUrl: "https://github.com/asafruddin/flutter_graphql",
    gradient: "from-green-600/30 to-emerald-900/50",
    featured: true,
  },
];

export const GITHUB_USERNAME = "asafruddin";
