import React from "react";
import house from '../../assets/images/vitaliy.jpg';
import './style.scss';

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <div className="about__image--wrapper">
          <img className="about__image" src={house} alt="john" />
        </div>
        <div className="about__content">
          <h1 className="about__content--title">About</h1>
          {/* <span className="about__content--line"></span> */}
          <p className="about__content--description">
            Intense is an International Financial Planning company with offices
            i n multiple jurisdictions over the world. Working with Intense
            gives me the ability to advise internat ional expatriates living in
            the middle east from where I live in USA.
          </p>
          <p className="about__content--me">
            I am Vitaliy Radchuk, a senior advisor for an independently owned financial
            planning company called <span className="about__content--me-highlight">AllBuild</span>.
          </p>
          <button className="about__content--button">Explore More</button>
        </div>
      </div>
    </div>
  );
};
