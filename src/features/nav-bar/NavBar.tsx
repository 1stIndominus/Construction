import { Link } from "react-scroll";
import "./nav.scss";
import { useMenuContext } from "../../context/ContextMenu";
import { BurgerMenu } from "./BurgerMenu";
import { LinkButtonData } from "../../staticData/linkButtonData";

type Props = {
  linkButtonData: LinkButtonData[];
};

export const NavBar: React.FC<Props> = ({ linkButtonData }) => {
  const { show, toggle } = useMenuContext();

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__content">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="nav__logo"
            />
            <ul className="navigation">
              {linkButtonData.map(({ to, label, offset }) => (
                <li className="navigation__list">
                  <Link
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    className="navigation__item"
                  >
                    {label}
                  </Link>
                </li>
              ))}
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
      {show && <BurgerMenu linkButtonData={linkButtonData} />}
    </>
  );
};
