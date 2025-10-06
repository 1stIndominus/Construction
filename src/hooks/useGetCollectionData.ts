import { useEffect, useState } from "react";
import { firestoreService } from "../services/firebase";
import { DocumentData } from "firebase/firestore";

export const useGetCollectionData = ({
  collectionId,
  dacumentId,
}: {
  collectionId: string;
  dacumentId: string;
}) => {
  const [collectionData, setCollectionData] = useState<DocumentData[]>([]);

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
