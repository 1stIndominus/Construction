import React from "react";
import "./demo.scss";

export const DemoSection = () => {
  return (
    <div className="demo" id="demo">
      <div className="demo__container">
        <div className="demo__info">
          <p className="demo__title">More Than 100 Financial Planners,</p>
          <p className="demo__subtitle">One Philosophy</p>
          <p className="demo__paragraph">
            Every single one of our financial advisors receives rigorous
            training according to John Doe’s philosophy based on academic
            research (including that of a Nobel laureate in Economics) and
            Behavioral Finance.
          </p>
          {/* <button className="button">Get your free financial analysis</button> */}
        </div>
        <div className="demo__video">
          <iframe
            className="demo__video--player"
            width="320"
            height="250"
            src="https://www.youtube.com/embed/oeqP5JtihMA"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
