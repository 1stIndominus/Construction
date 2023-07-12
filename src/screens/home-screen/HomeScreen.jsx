import React, { useContext } from "react";
import "./homescreen.scss";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Footer } from "../../features/footer/Footer";
import { Preview } from "../../features/preview/Preview";
import { About } from "../../features/about/About";
import { ImageSwiper } from "../../features/swiper/ImageSwiper";
import { DeliverySection } from "../../features/delivery/DeliverySection";
import { DemoSection } from "../../features/demo/DemoSection";
import { CompanyDirector } from "../../features/director/CompanyDirector";
import { ExperianceTimer } from "../../components/timer/ExperianceTimer";
import { MyProvider } from "../../helpers/ContextMenu";
import { FAQ } from "../../features/faq/FAQ";

export function HomeScreen() {
  const { show, toggle } = useContext(MyProvider);

  return (
    <div className="main__container" onClick={show ? toggle : null}>
      <NavBar />
      <Preview />
      <About />
      <DeliverySection />
      <DemoSection />
      <ImageSwiper />
      <CompanyDirector />
      <ExperianceTimer />
      <FAQ />
      <Footer />
    </div>
  );
}
