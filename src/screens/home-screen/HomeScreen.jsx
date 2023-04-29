import React, { useContext } from "react";
import "./homescreen.scss";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Footer } from "../../features/footer/Footer";
import { Preview } from "../../features/preview/Preview";
import { About } from "../../features/about/About";
import { MyProvider } from "../../helpers/ContextMenu";
import { BurgerMenu } from "../../features/nav-bar/BurgerMenu";

export function HomeScreen() {
  const { show } = useContext(MyProvider);
  return (
    <div className="main__container">
      <NavBar />
      {show && (
        <BurgerMenu />
      )}
      <Preview />
      <About />
      <Footer />
    </div>
  );
}
