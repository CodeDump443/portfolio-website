"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "@/constants";
import Image from "next/image";

const ServiceSlider = () => {
  return (
    <div className="relative w-full flex justify-center md:justify-end mt-6 md:mt-0">
      <div className="w-[90%] sm:w-[70%] md:w-[600px]">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="rounded-md cursor-pointer flex flex-col gap-6 mb-10 group relative text-white shadow-lg px-6 py-8 h-[300px] w-[250px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                  <p className="lg:text-[18px]">{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSlider;

