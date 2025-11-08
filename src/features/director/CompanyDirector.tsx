import React, { useLayoutEffect, useRef } from "react";
import "./companyDirectory.scss";
import { scrollHandler } from "../../helpers/scrollHandler";

export const CompanyDirector = () => {
  const card = useRef(null);

  useLayoutEffect(() => {
    scrollHandler(card);
  }, []);

  return (
    <div className={`card`} ref={card}>
      <div className="card__img"></div>
      <span className="card__title">Сompany's CEO</span>
      <p className="card__info">
        I'm Vitaliy, a versatile builder specializing in captivating visual
        transformations.&nbsp;
        <span className="about__content--me-highlight">
          With expertise in siding, soffit, and house remodeling,&nbsp;
        </span>
        I bring your vision to life with exceptional craftsmanship and
        functional design, ensuring enjoyable and meaningful experiences for
        your home.
      </p>
    </div>
  );
};
