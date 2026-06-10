'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/ui/icons';

export default function PromoSlider() {
  const slides = [
    { src: '/iphone14pro.png', alt: 'iPhone 14 Pro', href: '/coming-soon' },
    { src: '/anotherProduct.png', alt: 'Other Product', href: '/coming-soon' },
  ];

  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex items-center w-full max-w-[1104px]">
        {/* Prev button */}
        <button
          className="custom-prev w-[32px] h-[300px] bg-[#111] flex items-center justify-center cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>

        {}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          slidesPerView={1}
          loop={true}
          className="w-full h-[300px] relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link
                href={slide.href}
                className="w-full h-full flex items-center justify-center bg-gray-100 cursor-pointer relative"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1040}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {}
        <button
          className="custom-next w-[32px] h-[300px] bg-[#111] flex items-center justify-center cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
