"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Projects } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectSlider = () => {
  const router = useRouter();

  return (
    <div className="w-[70%] md:w-[40%]">
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          700: { slidesPerView: 1, spaceBetween: 15 },
        }}
      >
        {Object.entries(Projects).map(([group, items]) => (
          <SwiperSlide key={group} className="mb-14">
            <div className="grid grid-cols-2 gap-4 md:px-16">
              {items.map((project) => (
                <div
                  key={project.id}
                  className="relative group w-[150px] h-[150px] md:w-[230px] md:h-[230px] cursor-pointer"
                  onClick={() => router.push(`/my-projects/${group}`)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={280}
                    height={280}
                    className="rounded-md w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <p className="text-[14px] font-semibold">View Idea</p>
                    <Image
                      src="/assets/icons/arrow-right.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                      className="mt-1 invert brightness-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
