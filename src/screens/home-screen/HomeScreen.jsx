import React from "react";
import "./homescreen.scss";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Footer } from "../../features/footer/Footer";
import { Preview } from "../../features/preview/Preview";
import { About } from "../../features/about/About";
import { ImageSwiper } from "../../features/swiper/ImageSwiper";
import { DeliverySection } from "../../features/delivery/DeliverySection";
import { DemoSection } from "../../features/demo/DemoSection";

export function HomeScreen() {
  return (
    <div className="main__container">
      <NavBar />
      <Preview />
      <About />
      <DemoSection />
      <ImageSwiper />
      {/* <DeliverySection /> */}
      <Footer />
    </div>
  );
}
