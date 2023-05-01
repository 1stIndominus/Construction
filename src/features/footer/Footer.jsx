import React from "react";
import { Link } from "react-scroll";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";

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
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="menu__item"
            >
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              className="menu__item"
            >
              About us
            </Link>
          </li>
          <li className="menu__list">
            <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="menu__item"
            >
              Services
            </Link>
          </li>
          <li className="menu__list">
            <Link
              to="Contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="menu__item"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};