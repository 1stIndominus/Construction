import React, { useState } from "react";
import "./preview.scss";
import { nameValidationField, emailValidationField } from "../../helpers/validationForm";
import Axios from 'axios';

export const Preview = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const isNameValid = nameValidationField(userName);
  const isEmailValid = emailValidationField(email);

  console.log(isEmailValid)

  const TELEGRAM_TOKEN = "6101425309:AAHK9A_49b2tMjgjqCA2Xp8N7feCcy1nIKA";
  const TELEGRAM_CHAT_ID = "-1001874127252";
  const URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const USER_DATA_MESSAGE = `UserName: ${userName}\nEmail: ${email}\nQuestion: ${question}`;

  const resetFields = () => {
    setUserName("");
    setEmail("");
    setQuestion("");
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      
      Axios.post(URI_API, {
        chat_id: TELEGRAM_CHAT_ID,
        parse_mode: 'html',
        text: USER_DATA_MESSAGE
      })
    } catch (error) {
      console.log(error)
    } finally {
      resetFields();
    }
  }

  // const handleSubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const response = await fetch(URI_API, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         chat_id: TELEGRAM_CHAT_ID,
  //         parse_mode: "html",
  //         text: USER_DATA_MESSAGE,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log(data);

  //     resetFields();
  //   } catch (error) {
  //     console.error("Error:", error);
  //   } finally {
  //     resetFields();
  //   }
  // };

  const DISABLE_BUTTON = !userName.length || !email.length || !question.length || isNameValid !== 'Verified' || isEmailValid !== 'Verified';

  return (
    <div className="hero" id="Home">
      <div className="hero__content">
        <p className="hero__title">Call us</p>
        <p className="hero__number">+1 208-966-1947</p>
        <p data-text="AllBuild Homes" className="hero__subtitle">
          AllBuild Homes
        </p>
        <p className="hero__description">
          Expert Construction Services and Solutions
        </p>

        <form onSubmit={(event) => handleSubmit(event)}>
          <div class="coolinput">
            <label for="inputField" class="coolinput__text">
              Name
            </label>
            <input
              type="text"
              id="inputField"
              value={userName}
              placeholder="Write here..."
              name="input"
              class="coolinput__input"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div class="coolinput">
            <label for="input" class="coolinput__text">
              Email
            </label>
            <input
              type="text"
              value={email}
              placeholder="Write here..."
              name="input"
              class="coolinput__input"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div class="coolinput">
            <label for="input" class="coolinput__text">
              Question
            </label>
            <textarea
              type="text"
              value={question}
              placeholder="Write here..."
              name="input"
              class="coolinput__input--textarea"
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
