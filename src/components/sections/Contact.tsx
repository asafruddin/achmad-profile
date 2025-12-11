
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-8 relative z-10 border-t border-neutral-900 bg-black/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Connect</h2>
        <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
          Currently open to new opportunities and collaborations. 
          Feel free to reach out if you want to build something amazing together.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:achmad.safrudin@gmail.com"
            className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-white px-6 py-3 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
          
          <a
            href="https://github.com/asafruddin"
            target="_blank"
            className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-white px-6 py-3 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-all"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/achmad-safruddin-208b88152/"
            target="_blank"
            className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-white px-6 py-3 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-all"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
        
        <div className="mt-20 text-neutral-600 text-sm">
            © {new Date().getFullYear()} Achmad Safruddin. All rights reserved.
        </div>
      </div>
    </section>
  );
}
