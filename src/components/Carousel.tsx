"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { CustomImage } from '@/lib/types';

export default function Carousel({ images }: { images: CustomImage[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000 }}
    >
      {images.map((img) => (
        <SwiperSlide key={img.id} className="w-full h-full">
          <img
            src={process.env.NEXT_PUBLIC_API_URL + img.url}
            alt={img.alternativeText || ''}
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
