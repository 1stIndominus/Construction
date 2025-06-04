import { FC } from "react";
import { StarRating } from "../starRate/StarRating";
import "./commentCard.scss";

type Props = {
  rating: number;
  comment: string;
  name: string;
};

export const Card: FC<Props> = ({ rating, comment, name }) => {
  return (
    <div className="cards">
      <StarRating totalStars={rating} onRate={() => {}} active={true} />
      <div className="cards__comment">{comment}</div>
      <span className="about__content--me-highlight">{name}</span>
    </div>
  );
};
