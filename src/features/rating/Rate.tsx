import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { postDataFromInputsToTelegram } from "../../api/fetchData";
import { StarRating } from "../../components/starRate/StarRating";
import CardList from "./CardList";
import "./rate.scss";

const RatingWithComment = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");

  const isButtonDusabled = name.length && comment.length && rating;

  const resetForm = useCallback(() => {
    setComment("");
    setRating(0);
    setName("");
  }, []);

  const handleRate = (value: number) => {
    setRating(value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetForm();
    console.log(`Rating: ${rating}, Comment: ${comment}, Name: ${name}`);
    const userComment = `Rating\nUserName: ${name}\nStars: ${rating}\nComment: ${comment}`;
    postDataFromInputsToTelegram(userComment);
  };

  return (
    <div className="rate">
      <h2 className="rate__title">
        Your
        <span className="about__content--me-highlight">{` comments `}</span>
        and
        <span className="about__content--me-highlight">{` ratings `}</span>
        matter to us.
      </h2>
      <form onSubmit={handleSubmit} className="rate__form">
        <div className="rate__part--one">
          <input
            required
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            className="rate__input"
          />
          <StarRating totalStars={5} onRate={handleRate} />
          <button
            type="submit"
            className={
              isButtonDusabled
                ? "coolinput__submit--button"
                : "coolinput__submit--button-disabled"
            }
            disabled={!isButtonDusabled}
          >
            <span className="coolinput__submit--button-text">Send</span>
          </button>
        </div>
        <textarea
          className="rate__textinput"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Leave a comment..."
          rows={2}
          cols={50}
        />
        <br />
      </form>
      <CardList />
    </div>
  );
};

export default RatingWithComment;
