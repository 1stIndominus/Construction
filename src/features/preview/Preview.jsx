import React, { useState } from "react";
import "./preview.scss";

export const Preview = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const TELEGRAM_TOKEN = "6101425309:AAHK9A_49b2tMjgjqCA2Xp8N7feCcy1nIKA";
  const TELEGRAM_CHAT_ID = "-1001874127252";
  const URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  const handleName = (event) => {
    setUserName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(URI_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          parse_mode: "html",
          text: `UserName: ${userName}\nEmail: ${email}\nQuestion: ${question}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
        {/* <div className="hero__button">
          <a href="tel:+1 208-966-1947" className="hero__button--text">
            Free Consultation
          </a>
        </div> */}
        <form onSubmit={handleSubmit}>
          <div class="coolinput">
            <label for="inputField" class="coolinput__text">
              Name
            </label>
            <input
              type="text"
              id="inputField"
              placeholder="Write here..."
              name="input"
              class="coolinput__input"
              onChange={(value) => handleName(value)}
            />
          </div>
          <div class="coolinput">
            <label for="input" class="coolinput__text">
              Email
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="input"
              class="coolinput__input"
              onChange={(value) => handleEmail(value)}
            />
          </div>
          <div class="coolinput">
            <label for="input" class="coolinput__text">
              Question
            </label>
            <textarea
              type="text"
              placeholder="Write here..."
              name="input"
              class="coolinput__input--textarea"
              onChange={(value) => handleQuestion(value)}
            />
          </div>
          <button onSubmit={handleSubmit} className="hero__button">
            <span className="hero__button--text">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
