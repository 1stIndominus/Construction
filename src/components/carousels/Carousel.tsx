import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.scss";

type Props = {
  portfolio: string[];
};

const Carousel: React.FC<Props> = ({ portfolio }) => {
  return (
    <div className="carousel">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
      >
        {portfolio?.map((source, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={source} alt="slide_image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
