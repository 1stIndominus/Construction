import { useEffect, useState } from "react";
import { contentfulClient } from "../services/contentful";
import { ContentTypes, FAQType } from "../types/type";

export const useGetFAQData = ({
  contentType,
}: {
  contentType: ContentTypes;
}) => {
  const [data, setData] = useState<FAQType[]>([]);
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
              ...(item.fields as FAQType),
              id: item.sys.id,
            };
          })
          .sort((a, b) => a.question.localeCompare(b.question));

        setData(fieldsArray);
      } catch (error) {
        setError(error as Error);
        console.error(`Error fetching ${contentType} FAQ data:`, error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
