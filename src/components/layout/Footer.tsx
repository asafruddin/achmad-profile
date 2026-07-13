import { profile } from "@/data/profile";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const socialLinks = [
    { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
    { href: profile.github, icon: GitHubIcon, label: "GitHub" },
    { href: profile.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
  ];

  return (
    <footer className="relative z-10 border-t border-neutral-900 bg-black/40">
      <div className="container mx-auto max-w-6xl px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-black text-white">
              {profile.initials}
              <span className="text-accent">.</span>
            </span>
            <span className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="p-2 text-neutral-500 hover:text-accent-light transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
