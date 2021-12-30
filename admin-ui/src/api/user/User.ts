import { Article } from "../article/Article";

export type User = {
  articles?: Array<Article>;
  bio: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
