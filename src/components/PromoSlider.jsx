'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRouter } from 'next/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function PromoSlider() {
  const router = useRouter();

  const handleBannerClick = () => {
    router.push('/coming-soon'); // заглушка сторінки
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center w-[1104px]">
        {/* Prev button */}
        <div className="custom-prev w-[32px] h-[400px] bg-[#111] flex items-center justify-center cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          className="w-[1040px] h-[400px] relative"
        >
          <SwiperSlide>
            <div
              onClick={handleBannerClick}
              className="w-full h-full flex items-center justify-center bg-gray-100 cursor-pointer relative"
            >
              <img
                src="/iphone14pro.png"
                alt="iPhone 14 Pro"
                className="w-[1040px] h-[400px] object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              onClick={handleBannerClick}
              className="w-full h-full flex flex-col items-center justify-center bg-gray-100 cursor-pointer relative"
            >
              <h2>Special discount!</h2>
              <p>Save 20% today</p>
              <button>SHOP NOW</button>
              <img
                src="/anotherProduct.png"
                alt="Other Product"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Next button */}
        <div className="custom-next w-[32px] h-[400px] bg-[#111] flex items-center justify-center cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Tailwind заміна для pagination */}
      <div className="absolute bottom-[10px] left-0 right-0 flex justify-center">
        {/* Swiper сам генерує bullets, тому стилі задаємо через Tailwind */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            @apply bg-[#905BFF] opacity-50 w-[10px] h-[10px] mx-[6px] rounded-full transition-opacity transition-transform duration-300;
          }
          .swiper-pagination-bullet-active {
            @apply opacity-100 bg-[#323542] scale-120;
          }
        `}</style>
      </div>
    </div>
  );
}
