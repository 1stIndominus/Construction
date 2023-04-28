import React from "react";
import "./style.scss";

export const Preview = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <p className="hero__title">Call us</p>
        <p className="hero__number">+1 208-966-1947</p>
        <p className="hero__subtitle">Because Money</p>
        <p className="hero__description">Doesn't come with instructions</p>
        <button href="/" className="hero__button">
          <span className="hero__button--title" >Free Consultation</span>
        </button>
      </div>
    </div>
  );
};
