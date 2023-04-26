import React from "react";
import "./style.scss";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Footer } from "../../features/footer/Footer";
import { Preview } from "../../features/preview/Preview";

export function HomeScreen() {
  return (
    <div className="main__container">
      <NavBar />
      <Preview />
      <Footer />
    </div>
  );
}
