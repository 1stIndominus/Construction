import { useState, useRef, useEffect, FormEvent, FC } from "react";
import "./form.scss";
import {
  nameValidationField,
  emailValidationField,
  textAreaValidation,
} from "../../helpers/formValidation";
import { postDataFromInputsToTelegram } from "../../api/fetchData";
import { scrollHandlerForPreview } from "../../helpers/scrollHandler";
import { ErrorMessages } from "../../constants";

export const Form: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const inputForm = useRef<HTMLFormElement | null>(null);

  const isNameValid = nameValidationField(userName);
  const isEmailValid = emailValidationField(email);
  const isQuestionValid = textAreaValidation(question);
  const [onSaveError, setOnSaveError] = useState(false);

  const isNameErrorVisible =
    isNameValid !== ErrorMessages.VERIFIED && userName.length > 1;
  const isEmailErrorVisible =
    isEmailValid !== ErrorMessages.VERIFIED && email.length > 3;
  const isTextAreaErrorVisible =
    isQuestionValid !== ErrorMessages.VERIFIED && question.length > 5;

  const isValidForm =
    !userName.length ||
    !email.length ||
    question.length < 20 ||
    isNameValid !== ErrorMessages.VERIFIED ||
    isEmailValid !== ErrorMessages.VERIFIED;

  const resetFields = () => {
    setUserName("");
    setEmail("");
    setQuestion("");
    setOnSaveError(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (isValidForm) {
      event.preventDefault();
      setOnSaveError(true);
    } else {
      postDataFromInputsToTelegram({ event, userName, email, question });
      resetFields();
    }
  };

  const _renderErrorText = (errorType: ErrorMessages) => {
    if (errorType === ErrorMessages.NAME_ERROR) {
      return <div className="coolinput__error">{isNameValid}</div>;
    }
    if (errorType === ErrorMessages.EMAIL_ERROR) {
      return <div className="coolinput__error">{isEmailValid}</div>;
    }
    if (errorType === ErrorMessages.QUESTION_ERROR) {
      return <div className="coolinput__error">{isQuestionValid}</div>;
    }
  };

  useEffect(() => {
    scrollHandlerForPreview(inputForm);
  }, []);

  return (
    <div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="coolinput__container"
        ref={inputForm}
      >
        <div className="coolinput">
          <label htmlFor="inputField" className="coolinput__text">
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
          {isNameErrorVisible && _renderErrorText(ErrorMessages.NAME_ERROR)}
        </div>
        <div className="coolinput">
          <label htmlFor="input" className="coolinput__text">
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
          {isEmailErrorVisible && _renderErrorText(ErrorMessages.EMAIL_ERROR)}
        </div>
        <div className="coolinput">
          <label htmlFor="input" className="coolinput__text">
            Question
          </label>
          <textarea
            id="text"
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
          {isTextAreaErrorVisible &&
            _renderErrorText(ErrorMessages.QUESTION_ERROR)}
        </div>
        {onSaveError && (
          <p className="coolinput__submit--error">
            Please fill the form before sending
          </p>
        )}
        <button type="submit" className="coolinput__submit--button">
          <span className="coolinput__submit--button-text">Send</span>
        </button>
      </form>
    </div>
  );
};
