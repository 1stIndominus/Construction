import React, { useState, useEffect, useRef } from "react";
import "./delivery.scss";
import { scrollHandler } from "../../helpers/scrollHandler";

export const DeliverySection = () => {
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    scrollHandler(setIsActive, targetRef);
  }, []);
  return (
    <div class={`delivery ${isActive ? "active" : ""}`} ref={targetRef}>
      <div className="delivery__content">
        <span className="delivery__content--text">
          Reliable and punctual, I guarantee timely delivery of your
          construction and remodeling projects. With a meticulous approach,
          attention to detail, and efficient project management,&nbsp;
          <span className="about__content--me-highlight">
            I ensure that your job is completed on schedule, without
            compromising on quality.&nbsp;
          </span>
          Count on me to honor deadlines and exceed your expectations every
          time.
        </span>
      </div>
    </div>
  );
};
