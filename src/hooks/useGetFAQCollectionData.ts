import { useEffect, useState } from "react";
import { firestoreService } from "../services/firebase";

export type FAQType = {
  id: string;
  question: string;
  answer: string;
};

export const useGetFAQCollectionData = ({
  collectionId,
  dacumentId,
}: {
  collectionId: string;
  dacumentId: string;
}) => {
  const [collectionData, setCollectionData] = useState<FAQType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await firestoreService.getDocument(
        collectionId,
        dacumentId
      );

      if (result.success && result.data) {
        setCollectionData(result?.data);
      } else {
        console.error("❌ Error fetching documents:", result.error);
      }
    };

    fetchData();
  }, []);

  return { collectionData };
};
