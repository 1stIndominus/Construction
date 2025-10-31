import "./footer.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import {
  emailUrl,
  facebookUrl,
  instagramUrl,
  telegramUrl,
} from "../../constants";

export const Footer = () => {
  return (
    <div className="footer" id="Contacts">
      <div className="footer__content">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social__list">
          <li className="social__list--item">
            <a
              className="social__list--icon-container"
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={24} className="social__list--icon" />
            </a>
          </li>
          <li className="social__list--item">
            <a
              className="social__list--icon-container"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={24} className="social__list--icon" />
            </a>
          </li>
          <li className="social__list--item">
            <a
              className="social__list--icon-container"
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsEnvelope size={24} className="social__list--icon" />
            </a>
          </li>
          <li className="social__list--item">
            <a
              className="social__list--icon-container"
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelegram size={24} className="social__list--icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__content--terms">
        © 2023 All rights reserved. Terms of Use & Privacy Policy
      </div>
    </div>
  );
};
