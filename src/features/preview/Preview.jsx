import React, { useState } from "react";
import "./preview.scss";
import {
  nameValidationField,
  emailValidationField,
  textAreaValidation,
} from "../../helpers/validationForm";
import { NAME_ERROR, EMAIL_ERROR } from "../../helpers/constants";
import { postDataFromInputsToTelegram } from "../../apis/fetchData";
import { VERIFIED, QUESTION_ERROR } from "../../helpers/constants";
import { ExperianceTimer } from "../../components/ExperianceTimer";

export const Preview = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const isNameValid = nameValidationField(userName);
  const isEmailValid = emailValidationField(email);
  const isQuestionValid = textAreaValidation(question);

  const isNameErrorVisible = isNameValid !== VERIFIED && userName.length > 1;
  const isEmailErrorVisible = isEmailValid !== VERIFIED && email.length > 3;
  const isTextAreaErrorVisible =
    isQuestionValid !== VERIFIED && question.length > 5;

  const resetFields = () => {
    setUserName("");
    setEmail("");
    setQuestion("");
  };

  const handleSubmit = (event) => {
    postDataFromInputsToTelegram(event, userName, email, question);
    resetFields();
  };

  const _renderErrorText = (errorType) => {
    if (errorType === NAME_ERROR) {
      return <div class="coolinput__error">{isNameValid}</div>;
    }
    if (errorType === EMAIL_ERROR) {
      return <div class="coolinput__error">{isEmailValid}</div>;
    }
    if (errorType === QUESTION_ERROR) {
      return <div class="coolinput__error">{isQuestionValid}</div>;
    }
  };

  const DISABLE_BUTTON =
    !userName.length ||
    !email.length ||
    question.length < 20 ||
    isNameValid !== VERIFIED ||
    isEmailValid !== VERIFIED;

  return (
    <div className="hero" id="Home">
      <div className="hero__content">
        {/* <p className="hero__title">Call us</p>
        <p className="hero__number">+1 208-966-1947</p> */}
        <p data-text="AllBuilt Homes" className="hero__subtitle">
          AllBuilt Homes
        </p>
        <p className="hero__description">
          Expert Construction Services and Solutions
        </p>

        {/* <ExperianceTimer /> */}

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
              className={
                isNameErrorVisible
                  ? "coolinput__input--error"
                  : "coolinput__input"
              }
              onChange={(event) => setUserName(event.target.value)}
            />
            {isNameErrorVisible && _renderErrorText(NAME_ERROR)}
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
              className={
                isEmailErrorVisible
                  ? "coolinput__input--error"
                  : "coolinput__input"
              }
              onChange={(event) => setEmail(event.target.value)}
            />
            {isEmailErrorVisible && _renderErrorText(EMAIL_ERROR)}
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
              className={
                isTextAreaErrorVisible
                  ? "coolinput__input--textarea-error"
                  : "coolinput__input--textarea"
              }
              onChange={(event) => setQuestion(event.target.value)}
            />
            {isTextAreaErrorVisible && _renderErrorText(QUESTION_ERROR)}
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
