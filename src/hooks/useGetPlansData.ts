import { useEffect, useState } from "react";
import { contentfulClient } from "../services/contentful";
import { BuildingPlansType, BuildingStatus, ContentTypes } from "../types/type";
import * as contentful from "contentful";

export const useGetPlansData = () => {
  const [data, setData] = useState<BuildingPlansType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const contentData = await contentfulClient.getEntries({
          content_type: ContentTypes.NewBuildingPlans,
        });

        const fieldsArray = contentData.items
          .map((item) => {
            const fields = item.fields as any;
            const planImageUrl = fields.planImageUrl as contentful.Asset;
            const portfolio = fields.portfolio as
              | contentful.Asset[]
              | undefined;
            const adaptedPortfolio = portfolio?.map(
              (field: contentful.Asset) => field.fields?.file?.url as string
            );

            return {
              ...(fields as BuildingPlansType),
              id: item.sys.id,
              planImageUrl: planImageUrl?.fields?.file?.url as string,
              portfolio: adaptedPortfolio || null,
            };
          })
          .sort((a, b) => {
            // Priority 1: not sold before sold
            if (a.sold !== b.sold) {
              return a.sold ? 1 : -1;
            }
            if (
              a.buildingStatus === BuildingStatus.COMPLETED &&
              b.buildingStatus !== BuildingStatus.COMPLETED
            ) {
              return -1;
            }
            if (
              b.buildingStatus === BuildingStatus.COMPLETED &&
              a.buildingStatus !== BuildingStatus.COMPLETED
            ) {
              return 1;
            }

            return a.title.localeCompare(b.title);
          });

        setData(fieldsArray);
      } catch (error) {
        setLoading(false);
        setError(error as Error);
        console.error("Error fetching plans data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
