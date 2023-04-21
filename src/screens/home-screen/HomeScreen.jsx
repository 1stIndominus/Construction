import React from "react";
import "./style.scss";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Footer } from "../../features/footer/Footer";

export function HomeScreen() {
  return (
    <div className="main__container">
      <NavBar />
      <Footer />
    </div>
  );
}
