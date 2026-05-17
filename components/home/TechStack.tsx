"use client";

import { technologies } from "@/components/features/technologies/data/technology.data";

export default function TechStack() {
  return (
    <section id="tech" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-12 text-center sm:mb-16">
          <p
            className="
              mb-4
              text-xs sm:text-sm
              uppercase
              tracking-[0.3em]
              text-neutral-500
            "
          >
            Tech Stack
          </p>

          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold
              leading-tight
              text-white
            "
          >
            Technologies I Work With
          </h2>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            gap-4 sm:gap-5
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                  group
                  text-white
                  rounded-2xl sm:rounded-3xl
                  border border-white/10
                  bg-white/[0.03]

                  p-5 sm:p-6 lg:p-8

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-purple-500/30
                  hover:bg-white/[0.05]
                "
              >
                <div className="flex flex-col items-center text-center">
                  {/* ICON */}
                  <div
                    className="
                      mb-4 sm:mb-5

                      text-4xl sm:text-5xl

                      transition duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon className="text-white" />
                  </div>

                  {/* NAME */}
                  <h3
                    className="
                      text-xs sm:text-sm lg:text-base
                      font-medium
                      text-neutral-200
                    "
                  >
                    {tech.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}