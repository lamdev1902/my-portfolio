"use client";

import { technologies } from "@/components/features/technologies/data/technology.data";

export default function TechStack() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Tech Stack
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex flex-col items-center">
                  <Icon className="mb-5 text-5xl  transition duration-300 group-hover:scale-110" />

                  <h3 className="text-sm font-medium text-neutral-200">
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