import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Glow */}
      <div className="absolute left-0 top-1/2  -translate-y-1/2 rounded-full" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-20">
        
        {/* Left */}
        

        <div className="max-w-2xl">
          <p className="mb-4 text-sm text-white">
            Hello! I am{" "}
            <span className="text-violet-400">Lam</span>
          </p>

          <p className="mb-3 text-lg text-white">
            A Full-stack Developer who builds end-to-end web applications
          </p>

          <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Turning ideas into
            <br />
            <span className="relative inline-block text-violet-400">
              scalable systems
            </span>
            .
          </h1>

          <p className="mt-6 max-w-md md:text-1xl text-sm leading-relaxed text-white">
            I focus on building reliable, performant and maintainable systems
            that solve real problems and scale with business needs.
          </p>
        </div>
        <div className="relative">
          <Image 
            src="/images/avt5.png"
              width={300}
              height={300}
              quality={100}
              alt="avatar"
              style={{
                borderRadius: "50%",
                objectFit: "cover"
              }}
              className=""
          />
        </div>
      </div>
    </section>
  );
}