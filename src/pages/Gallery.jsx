import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import images from "../service/images";

import "./GalleryStyles.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <Swiper
        className="gallery-swiper"
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        lazy={true}
        modules={[Autoplay]}
      >
        {images.map((img) => (
          <SwiperSlide>
            <img src={img.src} alt={img.alt} title={img.title} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
