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
}

export enum DocumentIds {
  sidingFAQ = "sidingFAQ",
  newBuildingFAQ = "newBuildingFAQ",
}

export enum AnalyticsEvent {
  siteHasBeenOpened = "site_has_been_opened",

  // Click events
  chatButtonClicked = "chat_button_clicked",
}
