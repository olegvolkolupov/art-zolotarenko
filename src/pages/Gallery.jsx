import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import images from "../service/images";

import "./GalleryStyles.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <Swiper
        className="gallery-swiper"
        slidesPerView={3}
        grabCursor={true}
        loop={true}
      >
        {images.map((img) => (
          <SwiperSlide>
            <img src={img.src} alt={img.alt} title={img.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
