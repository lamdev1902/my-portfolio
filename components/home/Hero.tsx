import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 md:flex-row md:py-24">
        
        {/* Left */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="mb-4 text-sm text-white">
            Hello! I am{" "}
            <span className="text-violet-400">Lam</span>
          </p>

          <p className="mb-3 text-base text-white md:text-lg">
            A Full-stack Developer who builds end-to-end web applications
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Turning ideas into
            <br />
            <span className="text-violet-400">
              scalable systems
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
            I focus on building reliable, performant and maintainable systems
            that solve real problems and scale with business needs.
          </p>
        </div>

        {/* Right */}
        <div className="relative flex-shrink-0">
          <Image
            src="/images/avt5.png"
            width={320}
            height={320}
            quality={100}
            alt="avatar"
            className="
              h-[220px]
              w-[220px]
              rounded-full
              object-cover
              sm:h-[260px]
              sm:w-[260px]
              md:h-[320px]
              md:w-[320px]
            "
          />
        </div>
      </div>
    </section>
  );
}