import { BadgeVariant } from "../components/badge/Badge";
import { BuildingStatus } from "../hooks/useGetPlansCollectionData";

export const getBadgeVariant = (status: BuildingStatus) => {
  switch (status) {
    case BuildingStatus.COMPLETED:
      return BadgeVariant.SUCCESS;
    case BuildingStatus.IN_PROGRESS:
      return BadgeVariant.WARNING;
    case BuildingStatus.PLANNED:
    default:
      return BadgeVariant.INFO;
  }
};
