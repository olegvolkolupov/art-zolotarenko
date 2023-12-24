import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import images from "../service/images";

import "./GalleryStyles.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <Swiper
        className="gallery-swiper"
        grabCursor={true}
        loop
        modules={[Keyboard, Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        navigation
        keyboard={{
          enabled: true,
        }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.src} alt={img.alt} title={img.title} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
