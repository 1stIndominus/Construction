import React, { useRef, useEffect } from "react";
import "./demo.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { scrollHandler } from "../../helpers/scrollHandler";

export const DemoSection = () => {
  const demoInfo = useRef(null);
  const demoVideo = useRef(null);

  useEffect(() => {
    scrollHandler(demoInfo);
  }, []);

  useEffect(() => {
    scrollHandler(demoVideo);
  }, []);

  return (
    <div className="demo" id="demo">
      <div className="demo__container">
        <div className="demo__info" ref={demoInfo}>
          <p className="demo__title">
            "Mastering the Art of Siding: A Visual Guide to Siding Installation"
          </p>
          <p className="demo__paragraph">
            <span className="about__content--me-highlight">
              Immerse yourself in the timeless beauty of wood siding through our
              captivating video.&nbsp;
            </span>
            Explore the warmth and charm it brings to homes, along with its
            natural durability and versatility for a truly classic exterior.
          </p>
        </div>
        <div className="demo__video" ref={demoVideo}>
          <div class="ratio ratio-4x3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wnthBI0L8_U?si=kGFDDcQyFWyeFyGB"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};
