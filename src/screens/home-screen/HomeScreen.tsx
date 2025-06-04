import { FC } from "react";
import "./homescreen.scss";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Footer } from "../../features/footer/Footer";
import { Preview } from "../../features/preview/Preview";
import { About } from "../../features/about/About";
import { ImageSwiper } from "../../features/swiper/ImageSwiper";
import { DeliverySection } from "../../features/delivery/DeliverySection";
import { DemoSection } from "../../features/demo/DemoSection";
import { CompanyDirector } from "../../features/director/CompanyDirector";

import { useMenuContext } from "../../context/ContextMenu";
import { FAQ } from "../../features/faq/FAQ";
import { ContactUs } from "../../features/contact us/ContactUs";
import { ChatButton } from "../../components/buttons/ChatButton";
import RatingWithComment from "../../features/rating/Rate";

export const HomeScreen: FC = () => {
  const { show, toggle } = useMenuContext();

  return (
    <div className="main__container" onClick={show ? toggle : undefined}>
      <NavBar />
      <div className="main__container--chat">
        <ChatButton />
      </div>
      <Preview />
      <About />
      <DeliverySection />
      <DemoSection />
      <ImageSwiper />
      <CompanyDirector />
      <RatingWithComment />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};
