"use client";

import Card from "@/components/ui/Card";
import { experienceData } from "@/components/features/experience/data/experience.data";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function chunkArray<T>(arr: T[], size: number) {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

export default function ExperienceSection() {
  // mobile: 1 card
  // tablet: 2 cards
  // desktop: 4 cards
  const slides =
    typeof window !== "undefined" && window.innerWidth < 768
      ? chunkArray(experienceData, 1)
      : typeof window !== "undefined" && window.innerWidth < 1024
        ? chunkArray(experienceData, 2)
        : chunkArray(experienceData, 4);

  return (
    <section className="w-full">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Work Experience
      </h2>

      <div className="space-y-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {slides.map((group, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                  lg:grid-cols-2
                "
              >
                {group.map((item, i) => {
                  const card = (
                    <Card className="flex h-full min-h-[220px] flex-col gap-3">
                      <div className="text-2xl">
                        {item.icon}
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </Card>
                  );

                  if (item.learnMore && item.learnMore !== "#") {
                    return (
                      <Link
                        key={i}
                        href={item.learnMore}
                        className="block h-full"
                      >
                        {card}
                      </Link>
                    );
                  }

                  return (
                    <div key={i} className="h-full">
                      {card}
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center pt-2">
          <style jsx global>{`
            .swiper-pagination {
              position: relative !important;
              margin-top: 0;
            }

            .swiper-pagination-bullet {
              background: rgba(168, 85, 247, 0.25);
              opacity: 1;
              width: 8px;
              height: 8px;
              transition: all 0.3s ease;
            }

            .swiper-pagination-bullet-active {
              background: rgba(168, 85, 247, 1);
              transform: scale(1.3);
              box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}