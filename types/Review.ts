export type Review = {
  reviewerName: string;
  imgPath: string;
  consultedFor: string;
  reviewDate: Date;
  reviewRating: number; //min 1 -> max 5
  reviewText: string;
};
