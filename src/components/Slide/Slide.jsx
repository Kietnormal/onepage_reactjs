
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import './slide.scss'; 


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slideData = [
  {
    id: 1,
    imageUrl: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg",
    altText: "Banner quảng cáo trái cây tươi ngon",
  },
  {
    id: 2,
    imageUrl: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg",
    altText: "Ưu đãi đặc biệt mùa hè",
  },
  {
    id: 3,
    imageUrl: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg",
    altText: "Dịch vụ giao hàng trái cây tận nơi",
  },
];

const MySlider = () => {
  return (
    <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-6 md:mb-8">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className="mySwiper w-full h-full" 
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.imageUrl}
              alt={slide.altText}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;