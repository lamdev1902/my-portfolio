export function Footer() {
  return (
    <footer className="w-full mt-28 border-t border-white/10">
      <div className="max-w-[1000px] mx-auto px-6 py-10 flex flex-col gap-8">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">

          {/* LEFT */}
          <div className="flex flex-col gap-3">
            <h1 className="font-special text-[56px] leading-none">
            L
          </h1>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Full-stack WordPress & Next.js developer focused on
              building scalable systems, performance-driven websites,
              and SaaS integrations.
            </p>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex gap-16">

            <div className="flex flex-col gap-2">
              <span className="text-white text-sm font-medium">
                Navigation
              </span>
              <a href="#experience" className="text-gray-400 text-sm hover:text-white transition">
                Experience
              </a>
              <a href="#projects" className="text-gray-400 text-sm hover:text-white transition">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 text-sm hover:text-white transition">
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white text-sm font-medium">
                Social
              </span>
              <a href="https://github.com" target="_blank" className="text-gray-400 text-sm hover:text-white transition">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/lam-nguyen-2822ab248/" target="_blank" className="text-gray-400 text-sm hover:text-white transition">
                LinkedIn
              </a>
              <a href="mailto:nguyenhongtruclam1@gmail.com" className="text-gray-400 text-sm hover:text-white transition">
                Email
              </a>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Lam Truc. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with Next.js & Tailwind
          </p>

        </div>

      </div>
    </footer>
  );
}