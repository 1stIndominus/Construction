import React, { useRef, useEffect } from "react";
import house from "../../assets/homes/28.jpg";
import "./about.scss";
import { Link } from "react-scroll";
import { scrollHandler } from "../../helpers/scrollHandler";

export const About = () => {
  const aboutDescription = useRef(null);
  const aboutImage = useRef(null);

  useEffect(() => {
    scrollHandler(aboutDescription);
  }, []);

  useEffect(() => {
    scrollHandler(aboutImage);
  }, []);

  return (
    <div className="about" id="About">
      <div className="about__container">
        <div className="about__image--wrapper" ref={aboutImage}>
          <img className="about__image" src={house} alt="john" />
        </div>
        <div className={`about__content`} ref={aboutDescription}>
          <h1 className="about__content--title">About</h1>
          <p className="about__content--description">
            Are you in search of revamping your residence? AllBuilt Homes is
            your ultimate partner to revitalize your dwelling into a
            breathtaking marvel. Our forte lies in top-notch siding and remodeling of the house, designed to not only
            elevate the aesthetic appeal of your home but also fortify it
            against inclement weather conditions. With our seasoned team of
            experts, we guarantee to shepherd you through the entirety of the
            project, ensuring that your envisioned transformation is impeccably
            realized.
          </p>
          <p className="about__content--me">
            <span className="about__content--me-highlight">AllBuilt Homes</span>
            : Quality construction, remodeling & expertly installed siding.
            Headed by experienced builder Vitaliy Radchuk.
          </p>
          <Link
            to="swiper"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="button"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};
