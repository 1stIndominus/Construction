import React, { useState } from "react";
import "./preview.scss";
import {
  nameValidationField,
  emailValidationField,
} from "../../helpers/validationForm";
import { NAME_ERROR, EMAIL_ERROR } from "../../helpers/constants";
import { postDataFromInputsToTelegram } from "../../apis/fetchData";

export const Preview = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const isNameValid = nameValidationField(userName);
  const isEmailValid = emailValidationField(email);

  const resetFields = () => {
    setUserName("");
    setEmail("");
    setQuestion("");
  };

  const handleSubmit = (event) => {
    postDataFromInputsToTelegram(event, userName, email, question)
    resetFields();
  };

  const _renderErrorText = (errorType) => {
    if (errorType === NAME_ERROR) {
      return <div class="coolinput__error">{isNameValid}</div>;
    }
    if (errorType === EMAIL_ERROR) {
      return <div class="coolinput__error">{isEmailValid}</div>;
    }
  };

  const DISABLE_BUTTON =
    !userName.length ||
    !email.length ||
    !question.length ||
    isNameValid !== "Verified" ||
    isEmailValid !== "Verified";

  return (
    <div className="hero" id="Home">
      <div className="hero__content">
        {/* <p className="hero__title">Call us</p>
        <p className="hero__number">+1 208-966-1947</p> */}
        <p data-text="AllBuild Homes" className="hero__subtitle">
          AllBuild Homes
        </p>
        <p className="hero__description">
          Expert Construction Services and Solutions
        </p>

        <form
          onSubmit={(event) => handleSubmit(event)}
          className="coolinput__container"
        >
          <div class="coolinput">
            <label for="inputField" className="coolinput__text">
              Name
            </label>
            <input
              type="text"
              id="inputField"
              value={userName}
              placeholder="Type your Name"
              name="input"
              className="coolinput__input"
              onChange={(event) => setUserName(event.target.value)}
            />
            {isNameValid !== "Verified" && _renderErrorText(NAME_ERROR)}
          </div>
          <div className="coolinput">
            <label for="input" className="coolinput__text">
              Email
            </label>
            <input
              type="text"
              value={email}
              placeholder="Type your Email"
              name="input"
              className="coolinput__input"
              onChange={(event) => setEmail(event.target.value)}
            />
            {isEmailValid !== "Verified" && _renderErrorText(EMAIL_ERROR)}
          </div>
          <div className="coolinput">
            <label for="input" className="coolinput__text">
              Question
            </label>
            <textarea
              type="text"
              value={question}
              placeholder="Type your Question"
              name="input"
              className="coolinput__input--textarea"
              onChange={(event) => setQuestion(event.target.value)}
            />
          </div>
          <button
            disabled={DISABLE_BUTTON}
            type="submit"
            className="hero__button"
          >
            <span className="hero__button--text">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
