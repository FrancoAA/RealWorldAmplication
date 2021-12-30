import { Article } from "../article/Article";

export type Comment = {
  article?: Article | null;
  body: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
