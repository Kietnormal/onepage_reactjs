import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MySlider = () => {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
             src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg"
           
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
             src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySlider;
