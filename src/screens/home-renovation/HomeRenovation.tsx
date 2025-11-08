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
import { ContentTypes } from "../../types/type";
import Hero from "../../assets/images/hero.jpg";
import { ScreenList } from "../../router/constants/ScreenList";
import { HOME_SCREEN_LINK_BUTTON_DATA } from "../../staticData/linkButtonData";
import CardList from "../../features/rating/CardList";
import { useGetCompanyRate } from "../../hooks/useGetCompanyRate";
import { useGetSidingPortfolioData } from "../../hooks/useGetSidingPortfolioData";

export const HomeRenovation: React.FC = () => {
  const { show, toggle } = useMenuContext();

  const { data: renovationRatingData } = useGetCompanyRate({
    contentType: ContentTypes.RenovationRating,
  });

  const { data: portfolioData } = useGetSidingPortfolioData();

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
      {portfolioData.length && <ImageSwiper portfolioData={portfolioData} />}
      <CompanyDirector />
      <div className="rate">
        <RatingWithComment fromScreen={"Home Renovation"} />
        {renovationRatingData && (
          <CardList commentsData={renovationRatingData} />
        )}
      </div>
      <FAQ contentType={ContentTypes.RenovationFaq} />
      <ContactUs />
      <Footer />
    </div>
  );
};
