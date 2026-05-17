"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Bizreport",
    label: "Featured Project",
    subtitle: "Business Formation Platform",
    description:"A business formation platform that helps entrepreneurs launch and manage LLCs through guided workflows, educational resources, and state-specific filing information.",
    image: "/images/biz2.png",
    link: "https://bizreport.com",
  },
  {
    title: "Endomondo",
    label: "Featured Project",
    subtitle: "Fitness & Wellness Platform",
    description:
      "A fitness and wellness platform featuring exercise programs, gym-focused content, nutrition resources, and responsive user experiences.",
    image: "/images/end2.png",
    link: "https://endomondo.com",
  },
];

export default function ProjectSection() {
  return (
    <section className="w-full py-24">
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-purple-400 mb-4">
          Featured Projects
        </p>

        <h2 className="text-5xl font-bold text-white mb-5">
          Selected Work
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
          Real products I built for real users. Production-ready systems
          focused on performance, scalability, and clean user experiences.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              relative overflow-hidden
              rounded-[32px]
              border border-purple-500/20
              bg-gradient-to-br
              from-[#0b0b10]
              via-[#120d1d]
              to-[#09090f]
              p-8
            "
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* IMAGE */}
              <div className="relative">
                {/* glow */}
                <div className="absolute inset-0 bg-purple-500/20 blur-3xl scale-90 rounded-full" />

                <div
                  className="
                    relative overflow-hidden
                    rounded-2xl
                    border border-purple-500/20
                    bg-black/40
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="
                      w-full h-auto object-cover
                      transition duration-500
                      hover:scale-[1.02]
                    "
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4">
                  {project.label}
                </p>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-xl text-purple-300 mb-4">
                  {project.subtitle}
                </p>

                <div
                  className="
                    rounded-2xl
                    backdrop-blur-xl
                    mb-4
                  "
                >
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* BUTTON */}
                <div className="flex items-center gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="
                      inline-flex items-center gap-2
                      px-6 py-3
                      rounded-xl
                      border border-purple-500/40
                      text-white
                      transition-all duration-300
                      hover:bg-purple-500/10
                    "
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}