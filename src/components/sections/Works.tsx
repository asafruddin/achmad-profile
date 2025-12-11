"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, ExternalLink, Code2 } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  fork: boolean;
  language: string;
  updated_at: string;
};

export default function Works() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/asafruddin/repos?sort=updated&per_page=100")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter out forks and profile repo, take top 6 by updated/stars
          const filtered = data
            .filter((repo) => !repo.fork && repo.name !== "asafruddin")
            .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
            .slice(0, 6);
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch repos", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <section id="works" className="w-full py-24 px-8 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <Code2 className="text-emerald-500" />
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
              </div>

              <p className="text-neutral-400 text-sm mb-6 line-clamp-3 h-14">
                {repo.description || "No description available."}
              </p>

              <div className="flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stargazers_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://github.com/asafruddin" target="_blank" className="text-emerald-400 hover:text-emerald-300 hover:underline">View all repositories on GitHub -&gt;</a>
        </div>
      </div>
    </section>
  );
}
