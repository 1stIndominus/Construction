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
