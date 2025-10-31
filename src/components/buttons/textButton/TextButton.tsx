import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./textButton.scss";

type Props = {
  title: string;
  route: string;
  icon?: string;
};

export const TextButton: FC<Props> = ({ title, route, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="button-text" onClick={handleClick}>
      <span className="button-text__title">
        {icon && <span className="button-text__icon">{icon}</span>}
        {title}
      </span>
    </div>
  );
};
