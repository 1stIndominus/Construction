import { useEffect, useState } from "react";
import { contentfulClient } from "../services/contentful";
import { CommentsDataTypes, ContentTypes } from "../types/type";

export const useGetCompanyRate = ({
  contentType,
}: {
  contentType: ContentTypes;
}) => {
  const [data, setData] = useState<CommentsDataTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const contentData = await contentfulClient.getEntries({
          content_type: contentType,
        });

        const fieldsArray = contentData.items
          .map((item) => {
            return {
              ...(item.fields as CommentsDataTypes),
              id: item.sys.id,
            };
          })
          .sort((a, b) => a.name.localeCompare(b.name));

        setData(fieldsArray);
      } catch (error) {
        setError(error as Error);
        console.error("Error fetching company rate:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
