import React from "react";
import "./homescreen.scss";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Footer } from "../../features/footer/Footer";
import { Preview } from "../../features/preview/Preview";
import { About } from "../../features/about/About";
import { ImageSwiper } from "../../features/swiper/ImageSwiper";

export function HomeScreen() {
  return (
    <div className="main__container">
      <NavBar />
      <Preview />
      <ImageSwiper />
      <About />
      <Footer />
    </div>
  );
}
