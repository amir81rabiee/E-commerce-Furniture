"use client";
import React from "react";
import { Swiper as SwiperJs, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function Swiper({ children }: { children: React.ReactNode }) {
  return (
    <SwiperJs
      spaceBetween={24}
      slidesPerView="auto"
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false, 
      }}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide className="max-w-80" key={index}>
          {child}
        </SwiperSlide>
      ))}
    </SwiperJs>
  );
}
