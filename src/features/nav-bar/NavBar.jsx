import React, { useContext } from "react";
import { Link } from "react-scroll";
import "./nav.scss";
import { MyProvider } from "../../helpers/ContextMenu";
import { BurgerMenu } from "./BurgerMenu";

export const NavBar = () => {
  const { show, toggle } = useContext(MyProvider);

  return (
    <>
    <header className="header">
      <nav className="nav">
        <div className="nav__content">
          <div className="nav__logo"></div>
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
                offset={-110}
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
          <div className="burger-menu" onClick={toggle}>
            <div
              className={show ? "burger-bar clicked" : "burger-bar unclicked"}
            ></div>
            <div
              className={show ? "burger-bar clicked" : "burger-bar unclicked"}
            ></div>
            <div
              className={show ? "burger-bar clicked" : "burger-bar unclicked"}
            ></div>
          </div>
        </div>
      </nav>
    </header>
    {show && (
      <BurgerMenu />
    )}
    </>
  );
};
