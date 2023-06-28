import React from "react";
import "./directorCompany.scss";

export const CompanyDirector = () => {
  return (
    <div class="card">
      <div class="card__img"></div>
      <span class="card__title">Сompany's CEO</span>
      <p class="card__info">
        I'm Vitaliy, a versatile builder specializing in captivating visual
        transformations.&nbsp;
        <span className="about__content--me-highlight">
          With expertise in siding, soffit, and house remodeling,&nbsp;
        </span>I bring your
        vision to life with exceptional craftsmanship and functional design,
        ensuring enjoyable and meaningful experiences for your home.
      </p>
    </div>
  );
};
