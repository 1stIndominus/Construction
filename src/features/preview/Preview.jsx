import React, { useRef, useEffect } from "react";
import "./preview.scss";
import { scrollHandlerForPreview } from "../../helpers/scrollHandler";

export const Preview = () => {
  const title = useRef(null);
  const subTitle = useRef(null);

  useEffect(() => {
    scrollHandlerForPreview(title);
  }, []);

  useEffect(() => {
    scrollHandlerForPreview(subTitle);
  }, []);

  return (
    <div className="hero" id="Home">
      <div className="hero__content">
        <p data-text="AllBuilt Homes" className="hero__title" ref={title}>
          AllBuilt Homes
        </p>
        <p className="hero__description" ref={subTitle}>
          Expert Construction Services and Solutions
        </p>
      </div>
    </div>
  );
};
