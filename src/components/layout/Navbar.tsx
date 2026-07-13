"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-display text-2xl font-black tracking-tight text-white hover:text-accent-light transition-colors"
          >
            {profile.initials}
            <span className="text-accent">.</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-light bg-accent/10"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              href={profile.cvPath}
              download={profile.cvFilename}
              variant="primary"
              className="ml-4 !py-2 !px-4 !text-sm"
            >
              Resume
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-neutral-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium py-3 border-b border-white/5 transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-accent-light"
                  : "text-neutral-300 hover:text-accent-light"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            href={profile.cvPath}
            download={profile.cvFilename}
            variant="primary"
            className="mt-4 w-full"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
