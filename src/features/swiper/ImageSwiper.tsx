import React, { useRef, useEffect } from "react";
import "./swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { scrollHandler } from "../../helpers/scrollHandler";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { WorkingImagesTypes } from "../../types/type";

type Props = {
  portfolioData: WorkingImagesTypes[];
};

export const ImageSwiper: React.FC<Props> = ({ portfolioData }) => {
  const title = useRef(null);
  const images = useRef(null);

  useEffect(() => {
    scrollHandler(title);
  }, []);

  useEffect(() => {
    scrollHandler(images);
  }, []);

  return (
    <div className="containers" id="swiper">
      <h1 className="heading" ref={title}>
        The Exquisite{" "}
        <span className="about__content--me-highlight">Portfolio</span> of
        Vitaliy's Craftsmanship
      </h1>
      <Swiper
        ref={images}
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
        speed={1000}
        autoplay={{ delay: 3000 }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper__container"
      >
        {portfolioData?.map(({ source, title, id }) => {
          return (
            <SwiperSlide key={id}>
              <img src={source} alt="slide_image" />
              <div className="image__title">{title}</div>
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
