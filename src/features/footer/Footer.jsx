import React from "react";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="footer">
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
              href="https://www.facebook.com/vitaliy.radchuk.94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook
                size={24}
                color={"#fff"}
                className="social__list--icon"
              />
            </a>
          </li>
          <li className="social__list--item">
            <a
              className="social__list--icon-container"
              href="https://www.instagram.com/vitalixa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram
                size={24}
                color={"#fff"}
                className="social__list--icon"
              />
            </a>
          </li>
          <li className="social__list--item">
            <a
              className="social__list--icon-container"
              href="mailto:V.r.carpenterfloor@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail size={24} color={"#fff"} className="social__list--icon" />
            </a>
          </li>
          <li className="social__list--item">
            <a
              className="social__list--icon-container"
              href="https://t.me/Allbuilt_homes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelegram
                size={24}
                color={"#fff"}
                className="social__list--icon"
              />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__list">
            <a className="menu__item" href="#">
              Home
            </a>
          </li>
          <li className="menu__list">
            <a className="menu__item" href="#">
              About us
            </a>
          </li>
          <li className="menu__list">
            <a className="menu__item" href="#">
              Services
            </a>
          </li>
          <li className="menu__list">
            <a className="menu__item" href="#">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
