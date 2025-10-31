import { useRef, useEffect } from "react";
import "./preview.scss";
import { scrollHandlerForPreview } from "../../helpers/scrollHandler";
import { TextButton } from "../../components/buttons/textButton/TextButton";
import { ScreenList } from "../../router/constants/ScreenList";

type Props = {
  imageUrl: string;
  navButtonProps: {
    title: string;
    route: ScreenList;
    icon: string;
  };
};

export const Preview: React.FC<Props> = ({ imageUrl, navButtonProps }) => {
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
    <image
      className="hero"
      id="Home"
      style={{
        backgroundImage: `url(${imageUrl})`,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="hero__content">
        <p data-text="AllBuilt Homes" className="hero__title" ref={titleRef}>
          AllBuilt Homes
        </p>
        <p className="hero__description" ref={subTitleRef}>
          Expert Construction Services and Solutions
        </p>
      </div>
      <div className="hero__cards" ref={cardsRef}>
        <TextButton
          title={navButtonProps.title}
          route={navButtonProps.route}
          icon={navButtonProps.icon}
        />
      </div>
    </image>
  );
};
