import React, { useRef, useEffect } from "react";
import { FormWithFormik } from "../../components/form/FormWithFormik";
import "./contactUs.scss";
import { scrollHandler } from "../../helpers/scrollHandler";

export const ContactUs = () => {
  const formInfo = useRef();

  useEffect(() => {
    scrollHandler(formInfo)
  }, [])

  return (
    <div className="contactUs" id="contactUS">
      <div className="contactUs__info" ref={formInfo}>
        <h2 className="contactUs__info--title">
          Contact Us
          <span className="about__content--me-highlight">&nbsp;Today</span>
        </h2>
        <p className="contactUs__info--description">
          Connect with Allbuilt Homes to begin your dream project!
          <span className="about__content--me-highlight">
            &nbsp;Use the form to share your details and needs.&nbsp;
          </span>
          Let's
          bring your dream home to life today
        </p>
      </div>
        <FormWithFormik />
      <div >
      </div>
    </div>
  );
};
