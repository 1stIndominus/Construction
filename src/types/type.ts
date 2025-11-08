export type CommentsDataTypes = {
  id: string | number;
  stars: number;
  comment: string;
  name: string;
};

export type WorkingImagesTypes = {
  id: string;
  source: string;
  title: string;
};

export type FormValues = {
  userName: string;
  email: string;
  question: string;
};

export type FAQType = {
  id: string;
  question: string;
  answer: string;
};

// Firebase Analytics event names
export enum AnalyticsEvent {
  siteHasBeenOpened = "site_has_been_opened",
  userVisitedNewBuildingsPage = "user_visited_new_buildings_page",

  // Click events
  chatButtonClicked = "chat_button_clicked",
}

// Contentful content types
export enum ContentTypes {
  RenovationRating = "renovationRating",
  NewBuildRating = "newBuildRating",
  MewBuildingFaq = "newBuildingFaq",
  RenovationFaq = "renovationFaq",
  NewBuildingPlans = "newBuildingPlans",
  SidingPortfolio = "sidingPortfolio",
}

export enum BuildingStatus {
  COMPLETED = "Completed",
  IN_PROGRESS = "In Progress",
  PLANNED = "Planned",
}

export type BuildingPlansType = {
  id: string;
  title: string;
  description: string;
  planImageUrl: string;
  buildingStatus: BuildingStatus;
  sold: boolean;
  address: string;
  portfolio: string[] | null;
};
