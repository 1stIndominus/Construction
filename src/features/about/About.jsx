import React from "react";
import house from "../../assets/images/vitaliy.jpg";
import "./about.scss";

export const About = () => {
  return (
    <div className="about" id="About">
      <div className="about__container">
        <div className="about__image--wrapper">
          <img className="about__image" src={house} alt="john" />
        </div>
        <div className="about__content">
          <h1 className="about__content--title">About</h1>
          {/* <span className="about__content--line"></span> */}
          <p className="about__content--description">
            Are you looking to renovate your home? AllBuild Homes is here to
            help you transform your house into a stunning masterpiece. We
            specialize in high-quality siding and soffit installations that not
            only enhance the look of your home but also protect it from harsh
            weather conditions. Our expert team of professionals will guide you
            through the process, ensuring that your vision is executed to
            perfection.
          </p>
          <p className="about__content--me">
            <span className="about__content--me-highlight">AllBuild Homes</span>
            : Quality construction, expertly installed siding, soffit, windows,
            and doors. Headed by experienced builder Vitaliy Radchuk.
          </p>
          <button className="about__content--button">Explore More</button>
        </div>
      </div>
    </div>
  );
};
