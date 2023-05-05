import React from "react";
import "./demo.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <div class="ratio ratio-4x3">
            <iframe
              src="https://www.youtube.com/embed/0aUav1lx3rA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
