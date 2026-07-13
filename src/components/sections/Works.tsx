"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { featuredProjects, GITHUB_USERNAME } from "@/data/projects";
import { profile } from "@/data/profile";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
};

export default function Works() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const featuredRepoNames = new Set(
            featuredProjects.map((p) => p.githubUrl.split("/").pop())
          );
          const filtered = data
            .filter(
              (repo: Repo & { fork: boolean }) =>
                !repo.fork &&
                repo.name !== GITHUB_USERNAME &&
                !featuredRepoNames.has(repo.name)
            )
            .sort(
              (a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count
            )
            .slice(0, 3);
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="works" className="section-padding relative z-10">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Works"
            title="Featured projects"
            subtitle="A selection of fullstack applications and experiments — from web platforms to mobile apps."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <Card hover className="h-full flex flex-col p-0 overflow-hidden group">
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-neutral-800`}
                >
                  <span className="font-display text-4xl font-black text-white/20 group-hover:text-white/30 transition-colors">
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-accent-light transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-light hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-accent-light transition-colors"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 pt-12 border-t border-neutral-800">
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GitHubIcon className="w-5 h-5 text-accent" />
              More on GitHub
            </h3>

            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 hover:border-accent/50 transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-neutral-200 group-hover:text-accent-light transition-colors">
                        {repo.name}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-accent-light" />
                    </div>
                    <p className="text-xs text-neutral-500 line-clamp-2 mb-3">
                      {repo.description || "No description"}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-neutral-600">
                      {repo.language && <span>{repo.language}</span>}
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="mt-8 text-center">
              <Button href={profile.github} variant="secondary" target="_blank" rel="noopener noreferrer">
                View all repositories
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
