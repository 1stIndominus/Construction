import "./HomeRenovation.scss";
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
import { ChatButton } from "../../components/buttons/chatButton/ChatButton";
import RatingWithComment from "../../features/rating/Rate";
import { CollectionIds, DocumentIds } from "../../types/type";
import Hero from "../../assets/images/hero.jpg";
import { ScreenList } from "../../router/constants/ScreenList";
import { HOME_SCREEN_LINK_BUTTON_DATA } from "../../staticData/linkButtonData";

export const HomeRenovation: React.FC = () => {
  const { show, toggle } = useMenuContext();

  return (
    <div className="main__container" onClick={show ? toggle : undefined}>
      <NavBar linkButtonData={HOME_SCREEN_LINK_BUTTON_DATA} />
      <div className="main__container--chat">
        <ChatButton />
      </div>
      <Preview
        imageUrl={Hero}
        navButtonProps={{
          title: "Let’s Build Your Dream House",
          route: ScreenList.NewBuildings,
          icon: "🏗️",
        }}
      />
      <About />
      <DeliverySection />
      <DemoSection />
      <ImageSwiper />
      <CompanyDirector />
      <RatingWithComment />
      <FAQ
        collectionId={CollectionIds.FAQ}
        dacumentId={DocumentIds.sidingFAQ}
      />
      <ContactUs />
      <Footer />
    </div>
  );
};
