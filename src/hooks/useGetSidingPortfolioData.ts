import { useEffect, useState } from "react";
import { contentfulClient } from "../services/contentful";
import { ContentTypes, WorkingImagesTypes } from "../types/type";
import * as contentful from "contentful";

export const useGetSidingPortfolioData = () => {
  const [data, setData] = useState<WorkingImagesTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const contentData = await contentfulClient.getEntries({
          content_type: ContentTypes.SidingPortfolio,
        });

        if (contentData.items.length) {
          contentData.items.map((item) => {
            const fields = item.fields as any;
            const media = fields.media as contentful.Asset[] | undefined;

            const portfolioData: WorkingImagesTypes[] =
              media?.map((asset: contentful.Asset) => {
                const url = asset.fields?.file?.url as string;
                const title = asset.fields?.title as string;

                return {
                  id: asset.sys.id,
                  source: url,
                  title: title,
                };
              }) || [];

            setData(portfolioData);
          });
        }
      } catch (error) {
        setLoading(false);
        setError(error as Error);
        console.error("Error fetching siding portfolio data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
