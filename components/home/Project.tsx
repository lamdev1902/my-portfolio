"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Bizreport",
    label: "Featured Project",
    subtitle: "Business Formation Platform",
    description:
      "A business formation platform that helps entrepreneurs launch and manage LLCs through guided workflows, educational resources, and state-specific filing information.",
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
    <section className="w-full py-16 sm:py-20 lg:py-24" id="projects">
      {/* HEADER */}
      <div className="mb-12 text-center sm:mb-16">
        <p
          className="
            mb-4
            text-xs sm:text-sm
            uppercase
            tracking-[0.25em]
            text-purple-400
          "
        >
          Featured Projects
        </p>

        <h2
          className="
            mb-4 sm:mb-5
            text-3xl sm:text-4xl lg:text-5xl
            font-bold
            text-white
          "
        >
          Selected Work
        </h2>

        <p
          className="
            mx-auto
            max-w-2xl
            px-2
            text-sm sm:text-base
            leading-relaxed
            text-gray-400
          "
        >
          Real products I built for real users. Production-ready systems
          focused on performance, scalability, and clean user experiences.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
  {projects.map((project, index) => (
    <div
      key={index}
      className="
        relative overflow-hidden
        rounded-2xl lg:rounded-[32px]
        border border-purple-500/20
        bg-gradient-to-br
        from-[#0b0b10]
        via-[#120d1d]
        to-[#09090f]
        p-4 sm:p-6 lg:p-8
      "
    >
      <div
        className={`
          grid
          grid-cols-1 lg:grid-cols-2
          items-center
          gap-8 lg:gap-14

          ${
            index % 2 !== 0
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }
        `}
      >
        {/* IMAGE */}
        <div className="relative">
          {/* glow */}
          <div
            className="
              absolute inset-0
              rounded-full
              bg-purple-500/20
              blur-3xl
              scale-90
            "
          />

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
              width={1200}
              height={800}
              priority
              className="
                w-full h-auto
                object-cover

                transition-all duration-500
                hover:scale-[1.03]
              "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          <p
            className="
              mb-3
              text-xs sm:text-sm
              uppercase
              tracking-[0.25em]
              text-purple-400
            "
          >
            {project.label}
          </p>

          <h3
            className="
              mb-4
              text-2xl sm:text-3xl lg:text-4xl
              font-bold
              leading-tight
              text-white
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mb-4
              text-base sm:text-lg lg:text-xl
              text-purple-300
            "
          >
            {project.subtitle}
          </p>

          <p
            className="
              mb-6
              text-sm sm:text-base
              leading-relaxed
              text-gray-300
            "
          >
            {project.description}
          </p>

          <Link
            href={project.link}
            target="_blank"
            className="
              inline-flex items-center justify-center

              w-full sm:w-auto

              rounded-xl
              border border-purple-500/40

              px-5 py-3
              sm:px-6

              text-sm sm:text-base
              font-medium
              text-white

              transition-all duration-300

              hover:bg-purple-500/10
              hover:border-purple-400
            "
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}