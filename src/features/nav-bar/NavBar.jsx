import React from "react";
import { Link } from "react-scroll";
import "./nav.scss";
import { BiAlignRight } from "react-icons/bi";
export const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__content">
          <div className="nav__logo">
            <div className="logo"></div>
          </div>
          <ul className="navigation">
            <li className="navigation__list">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="navigation__item"
              >
                Home
              </Link>
            </li>
            <li className="navigation__list">
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
                className="navigation__item"
              >
                About us
              </Link>
            </li>
            <li className="navigation__list">
              <Link
                to="Services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navigation__item"
              >
                Services
              </Link>
            </li>
            <li className="navigation__list">
              <Link
                to="Contacts"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navigation__item"
              >
                Contacts
              </Link>
            </li>
          </ul>
          <button className="nav__burger">
            <BiAlignRight color="#fff" size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};
