import React from "react";
import { FaConfluence } from "react-icons/fa";
import "./style.scss";
import { BiAlignRight } from "react-icons/bi";
export const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__content">
        <button className="nav__content--logo">
          <FaConfluence color="#fff" size={20} />
          <p className="nav__content--title">Logo</p>
        </button>
        <div className="nav__content--details">
          <button className="nav__button">Home</button>
          <button className="nav__button">About us</button>
          <button className="nav__button">Services</button>
          <button className="nav__button">Contacts</button>
        </div>
        <button className="nav__content--burger">
          <BiAlignRight color="#fff" size={24}/>
        </button>
      </div>
    </nav>
  );
};
