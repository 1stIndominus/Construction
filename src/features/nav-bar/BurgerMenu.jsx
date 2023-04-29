import React, { useContext } from "react";
import { Link } from "react-scroll";
import './nav.scss';
import { MyProvider } from "../../helpers/ContextMenu";

export const BurgerMenu = () => {
  const { setShow } = useContext(MyProvider);

  return (
    <div className="burger">
      <ul className="burger__list">
        <li className="burger__item">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="burger__text"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
        </li>
        <li className="burger__item">
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
            className="burger__text"
            onClick={() => setShow(false)}
          >
            About us
          </Link>
        </li>
        <li className="burger__item">
          <Link
            to="Services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="burger__text"
            onClick={() => setShow(false)}
          >
            Services
          </Link>
        </li>
        <li className="burger__item">
          <Link
            to="Contacts"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="burger__text"
            onClick={() => setShow(false)}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};
