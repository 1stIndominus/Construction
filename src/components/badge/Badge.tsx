import { FC } from "react";
import "./badge.scss";

export enum BadgeVariant {
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  DANGER = "danger",
  DEFAULT = "default",
}

type BadgeProps = {
  text: string;
  variant?: BadgeVariant;
  className?: string;
};

export const Badge: FC<BadgeProps> = ({
  text,
  variant = BadgeVariant.DEFAULT,
  className = "",
}) => {
  return <span className={`badge badge--${variant} ${className}`}>{text}</span>;
};
