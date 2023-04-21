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
        <ul className="footer__content--social-icon">
          <li className="footer__content--list">
            <a className="footer__content--icon-container" href="#">
              <BsFacebook size={24} color={"#fff"} />
            </a>
          </li>
          <li className="footer__content--list">
            <a className="footer__content--icon-container" href="#">
              <BsInstagram size={24} color={"#fff"} />
            </a>
          </li>
          <li className="footer__content--list">
            <a className="footer__content--icon-container" href="#">
              <FiMail size={24} color={"#fff"} />
            </a>
          </li>
          <li className="footer__content--list">
            <a className="footer__content--icon-container" href="#">
              <BsTelegram size={24} color={"#fff"} />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__list"><a className="menu__item" href="#">Home</a></li>
          <li className="menu__list"><a className="menu__item" href="#">About us</a></li>
          <li className="menu__list"><a className="menu__item" href="#">Services</a></li>
          <li className="menu__list"><a className="menu__item" href="#">Contacts</a></li>
        </ul>
      </div>
    </div>
  );
};
