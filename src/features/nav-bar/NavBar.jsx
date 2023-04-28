import React from "react";
import { FaConfluence } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";

import "./style.scss";
import { BiAlignRight } from "react-icons/bi";
export const NavBar = () => {
  return (
    <div className="header">
      <nav className="nav">
        <div className="nav__content">
          <button className="nav__content--logo">
            <div className="logo">
              <p className="nav__content--title">V.</p>
              {/* <GiHouse color="#fff" size={20} /> */}
              <div className="logo__image"></div>
              <p className="nav__content--title">Wallco</p>
            </div>
            <p className="nav__content--title--small">Homes</p>
          </button>
          <div className="nav__content--details">
            <button className="nav__button">Home</button>
            <button className="nav__button">About us</button>
            <button className="nav__button">Services</button>
            <button className="nav__button">Contacts</button>
          </div>
          <button className="nav__content--burger">
            <BiAlignRight color="#fff" size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
};
