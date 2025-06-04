import { Link } from "react-scroll";
import "./nav.scss";
import { useMenuContext } from "../../context/ContextMenu";

export const BurgerMenu = () => {
  const { setShow } = useMenuContext();

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
            to="swiper"
            spy={true}
            smooth={true}
            offset={-100}
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
        <li className="burger__item">
          <Link
            to="FAQ"
            spy={true}
            smooth={true}
            offset={-360}
            duration={500}
            className="burger__text"
            onClick={() => setShow(false)}
          >
            FAQs
          </Link>
        </li>
      </ul>
    </div>
  );
};
