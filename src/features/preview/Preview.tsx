import { useRef, useEffect } from "react";
import "./preview.scss";
import { scrollHandlerForPreview } from "../../helpers/scrollHandler";

export const Preview = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    scrollHandlerForPreview(titleRef);
  }, []);

  useEffect(() => {
    scrollHandlerForPreview(subTitleRef);
  }, []);

  return (
    <div className="hero" id="Home">
      <div className="hero__content">
        <p data-text="AllBuilt Homes" className="hero__title" ref={titleRef}>
          AllBuilt Homes
        </p>
        <p className="hero__description" ref={subTitleRef}>
          Expert Construction Services and Solutions
        </p>
      </div>
    </div>
  );
};
