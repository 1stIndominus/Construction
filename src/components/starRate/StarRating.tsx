import React, { useState } from "react";
import "./starRating.scss";

type Props = {
  totalStars: number;
  onRate: (value: number) => void;
  active?: boolean;
};

export const StarRating: React.FC<Props> = ({ totalStars, onRate, active }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onRate(value);
  };

  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            className={`stars__star ${
              ratingValue <= rating
                ? "about__content--me-highlight"
                : active
                ? "about__content--me-highlight"
                : ""
            }`}
            onClick={() => handleClick(ratingValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};
