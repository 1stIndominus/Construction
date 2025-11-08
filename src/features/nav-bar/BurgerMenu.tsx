import { Link } from "react-scroll";
import "./nav.scss";
import { useMenuContext } from "../../context/ContextMenu";
import { LinkButtonData } from "../../staticData/linkButtonData";

type Props = {
  linkButtonData: LinkButtonData[];
};

export const BurgerMenu: React.FC<Props> = ({ linkButtonData }) => {
  const { setShow } = useMenuContext();

  return (
    <div className="burger">
      <ul className="burger__list">
        {linkButtonData.map(({ to, label, offset }) => (
          <li className="burger__item">
            <Link
              to={to}
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              className="burger__text"
              onClick={() => setShow(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
