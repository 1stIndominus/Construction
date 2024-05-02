import React from 'react';
import { StarRating } from "../../components/starRate/StarRating";
import './commentCard.scss';

export const Card = ({ rating, comment, name }) => {
  return (
    <div className="cards">
      <StarRating totalStars={rating} onRate={() => {}} active={true} />
      <div className="cards__comment">{comment}</div>
      <span className="about__content--me-highlight">{name}</span>
    </div>
  );
};