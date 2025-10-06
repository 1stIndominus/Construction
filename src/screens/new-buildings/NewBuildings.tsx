import { ChatButton } from "../../components/buttons/ChatButton";
import { useMenuContext } from "../../context/ContextMenu";
import { ContactUs } from "../../features/contact us/ContactUs";
import { CompanyDirector } from "../../features/director/CompanyDirector";
import { FAQ } from "../../features/faq/FAQ";
import { Footer } from "../../features/footer/Footer";
import { NavBar } from "../../features/nav-bar/NavBar";
import { Preview } from "../../features/preview/Preview";
import RatingWithComment from "../../features/rating/Rate";
import { CollectionIds, DocumentIds } from "../../types/type";
import { BuildingsSection } from "../../features/buildings-section/BuildingsSection";

const NewBuildings = () => {
  const { show, toggle } = useMenuContext();

  return (
    <div className="main__container" onClick={show ? toggle : undefined}>
      <NavBar />
      <div className="main__container--chat">
        <ChatButton />
      </div>
      <Preview />
      <BuildingsSection />
      <RatingWithComment />
      <CompanyDirector />

      <FAQ
        collectionId={CollectionIds.FAQ}
        dacumentId={DocumentIds.newBuildingFAQ}
      />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default NewBuildings;
