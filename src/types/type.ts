export type FaqItemTypes = {
  id: number;
  question: string;
  answer: string;
};

export type CommentsDataTypes = {
  id: number;
  rating: number;
  comment: string;
  name: string;
};

export type WorkingImagesTypes = {
  source: string;
  title: string;
};

export type FormValues = {
  userName: string;
  email: string;
  question: string;
};

// Firebase documents data type
export enum CollectionIds {
  FAQ = "FAQ",
  plans= "plans",
}

export enum DocumentIds {
  sidingFAQ = "sidingFAQ",
  newBuildingFAQ = "newBuildingFAQ",
  newBuildingPlans = "newBuildingPlans",
}

export enum AnalyticsEvent {
  siteHasBeenOpened = "site_has_been_opened",
  userVisitedNewBuildingsPage = "user_visited_new_buildings_page",

  // Click events
  chatButtonClicked = "chat_button_clicked",
}
