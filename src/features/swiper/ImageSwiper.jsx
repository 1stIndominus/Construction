import React from "react";
import "./swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_Img1 from "../../assets/homes/1.jpg";
import slide_Img2 from "../../assets/homes/2.jpg";
import slide_Img3 from "../../assets/homes/3.jpg";
import slide_Img4 from "../../assets/homes/4.jpg";
import slide_Img5 from "../../assets/homes/5.jpg";
import slide_Img6 from "../../assets/homes/6.jpg";

const data = [
  {
    source:
      "https://www.bankrate.com/2020/01/31131553/How-much-does-vinyl-siding-cos.jpg?auto=webp&optimize=high&crop=16:9",
    title: "Siding Installation Image of workers installing siding on a house.",
  },
  {
    source:
      "https://www.thespruce.com/thmb/4gkAizJvX1g1I2wO8-IfuYRweh8=/7952x0/filters:no_upscale():max_bytes(150000):strip_icc()/cons-of-vinyl-house-siding-1821806-hero-eb2d947c35f34305bdb3305d2e3c8225.jpg",
    title: "Siding Installation Image of workers installing siding on a house.",
  },
  {
    source:
      "https://5.imimg.com/data5/DC/II/FU/SELLER-5079754/vinyl-sidings-500x500.jpg",
    title: "Siding Installation Image of workers installing siding on a house.",
  },
  {
    source:
      "https://www.whatisvinyl.com/wp-content/uploads/2021/08/What-Is-Vinyl-Siding-Made-of.jpg",
    title: "Siding Installation Image of workers installing siding on a house.",
  },
  {
    source: slide_Img2,
    title: "Siding Installation Image of workers installing siding on a house.",
  },
  {
    source:
      "https://jdhostetter.com/wp-content/uploads/Hire-Install-Your-House-Siding.jpg",
    title: "Siding Installation Image of workers installing siding on a house.",
  },
];

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
        {data.map((image) => {
          return (
            <SwiperSlide>
              <div className="image__title">{image.title}</div>
              <img src={image.source} alt="slide_image" />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FiArrowLeft
              color={"#bd9546", "#e6d48a", "#deb750"}
              size={30}
            />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FiArrowRight 
              color={"#bd9546", "#e6d48a", "#deb750"}
              size={30} 
            />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
