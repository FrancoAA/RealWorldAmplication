import { Article } from "../article/Article";

export type Tag = {
  articles?: Array<Article>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};
