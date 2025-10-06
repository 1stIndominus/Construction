import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./navigationCard.scss";
import { analyticsService } from "../../services/analytics";

type Props = {
  title: string;
  route: string;
  icon?: string;
};

export const NavigationCard: FC<Props> = ({ title, route, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="navigation-text" onClick={handleClick}>
      {icon && <span className="navigation-text__icon">{icon}</span>}
      <span className="navigation-text__title">{title}</span>
    </div>
  );
};
