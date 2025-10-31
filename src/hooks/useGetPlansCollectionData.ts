import { useEffect, useState } from "react";
import { firestoreService } from "../services/firebase";

export enum BuildingStatus {
  COMPLETED = "Completed",
  IN_PROGRESS = "In Progress",
  PLANNED = "Planned",
}

export type BuildingPlansType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  buildingStatus: BuildingStatus;
  sold: boolean;
  address: string;
  portfolio: string[];
};

export const useGetPlansCollectionData = ({
  collectionId,
  dacumentId,
}: {
  collectionId: string;
  dacumentId: string;
}) => {
  const [collectionData, setCollectionData] = useState<BuildingPlansType[]>([]);

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
