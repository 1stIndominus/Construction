import React from "react";
import "./preview.scss";

export const Preview = () => {
  return (
    <div className="hero" id="Home">
      <div className="hero__content">
        <p className="hero__title">Call us</p>
        <p className="hero__number">+1 208-966-1947</p>
        <p data-text="Because Money" className="hero__subtitle">
          Because Money
        </p>
        <p className="hero__description">Doesn't come with instructions</p>
        <div className="hero__button">
          <a href="tel:+1 208-966-1947" className="hero__button--text">
            Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};
