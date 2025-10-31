import { ChatButton } from "../../components/buttons/chatButton/ChatButton";
import { useMenuContext } from "../../context/ContextMenu";
import { ContactUs } from "../../features/contact us/ContactUs";
import { CompanyDirector } from "../../features/director/CompanyDirector";
import { FAQ } from "../../features/faq/FAQ";
import { Footer } from "../../features/footer/Footer";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Preview } from "../../features/preview/Preview";
import RatingWithComment from "../../features/rating/Rate";
import { AnalyticsEvent, CollectionIds, DocumentIds } from "../../types/type";
import { BuildingsSection } from "../../features/buildings-section/BuildingsSection";
import ConstructionBuilding from "../../assets/images/constructionBuilding.jpeg";
import { ScreenList } from "../../router/constants/ScreenList";
import { useTrackEvent } from "../../hooks/useTrackEvent";
import { NEW_BUILDING_SCREEN_LINK_BUTTON_DATA } from "../../staticData/linkButtonData";

const NewBuildings = () => {
  const { show, toggle } = useMenuContext();
  useTrackEvent({ eventName: AnalyticsEvent.userVisitedNewBuildingsPage });

  return (
    <div className="main__container" onClick={show ? toggle : undefined}>
      <NavBar linkButtonData={NEW_BUILDING_SCREEN_LINK_BUTTON_DATA} />
      <div className="main__container--chat">
        <ChatButton />
      </div>
      <Preview
        imageUrl={ConstructionBuilding}
        navButtonProps={{
          title: "Need to fix up your home?",
          route: ScreenList.HomeRenovation,
          icon: "🔧",
        }}
      />
      <BuildingsSection />
      <ContactUs />
      <CompanyDirector />
      <RatingWithComment />

      <FAQ
        collectionId={CollectionIds.FAQ}
        dacumentId={DocumentIds.newBuildingFAQ}
      />
      <Footer />
    </div>
  );
};

export default NewBuildings;
