import React from "react";
import "./swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { workingImages } from "../../apis/imagesData";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";



export const ImageSwiper = () => {
  return (
    <div className="container">
      <h1 className="heading">Our Works</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {workingImages.map((image) => {
          return (
            <SwiperSlide>
              <img src={image.source} alt="slide_image" />
              <div className="image__title">{image.title}</div>
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FiArrowLeft
              color={"#deb750"}
              size={30}
            />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FiArrowRight 
              color={"#e6d48a"}
              size={30} 
            />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
