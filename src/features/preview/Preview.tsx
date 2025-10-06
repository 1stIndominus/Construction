import { useRef, useEffect } from "react";
import "./preview.scss";
import { scrollHandlerForPreview } from "../../helpers/scrollHandler";
import { NavigationCard } from "../../components/card/NavigationCard";
import { ScreenList } from "../../router/constants/ScreenList";

export const Preview = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    scrollHandlerForPreview(titleRef);
  }, []);

  useEffect(() => {
    scrollHandlerForPreview(subTitleRef);
  }, []);

  useEffect(() => {
    scrollHandlerForPreview(cardsRef);
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
      <div className="hero__cards" ref={cardsRef}>
        <NavigationCard
          title="Wanna build your dream house?"
          route={ScreenList.NewBuildings}
          icon="🏗️"
        />
        <NavigationCard
          title="Wanna repair your house?"
          route={ScreenList.Home}
          icon="🔧"
        />
      </div>
    </div>
  );
};
