import React from "react";
import house from "../../assets/homes/23.jpg";
import "./about.scss";
import { Link } from "react-scroll";

export const About = () => {
  return (
    <div className="about" id="About">
      <div className="about__container">
        <div className="about__image--wrapper">
          <img className="about__image" src={house} alt="john" />
        </div>
        <div className="about__content">
          <h1 className="about__content--title">About</h1>
          <p className="about__content--description">
            Are you looking to renovate your home? AllBuild Homes is here to
            help you transform your house into a stunning masterpiece. We
            specialize in high-quality siding and soffit installations & remodeling that not
            only enhance the look of your home but also protect it from harsh
            weather conditions. Our expert team of professionals will guide you
            through the process, ensuring that your vision is executed to
            perfection.
          </p>
          <p className="about__content--me">
            <span className="about__content--me-highlight">AllBuild Homes</span>
            : Quality construction & remodeling, expertly installed siding, soffit, windows,
            and doors. Headed by experienced builder Vitaliy Radchuk.
          </p>
          <Link
            to="swiper"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="about__content--button"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};
