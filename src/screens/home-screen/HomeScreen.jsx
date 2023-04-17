import React from "react";
import "./style.scss";
import { FaConfluence } from "react-icons/fa";

export function HomeScreen() {
  return (
    <div className="main__container">
      <nav className="nav">
        <div className="nav__content">
          <div className="nav__content--logo">
            <FaConfluence color="#fff" size={20} />
            <p className="nav__title">Logo</p>
          </div>
          <div className="nav__content--details">
            <p className="nav__title">Home</p>
            <p className="nav__title">About us</p>
            <p className="nav__title">Services</p>
            <p className="nav__title">Contacts</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
