import { useGetCollectionData } from "../../hooks/useGetCollectionData";
import "./buildingsSection.scss";

type BuildingPlan = {
  id: string;
  title: string;
  description: string;
  image: string;
  buildingStatus: string;
  propertyStatus: string;
};

export const BuildingsSection = () => {
  const { collectionData } = useGetCollectionData({
    collectionId: "plans",
    dacumentId: "newBuildingPlans",
  });

  return (
    <section className="buildings-section">
      <div className="buildings-section__container">
        {/* {plans.map((plan: BuildingPlan) => (
          
        ))} */}
      </div>
    </section>
  );
};
