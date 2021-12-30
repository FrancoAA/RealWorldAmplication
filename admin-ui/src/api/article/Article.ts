import { User } from "../user/User";
import { Comment } from "../comment/Comment";
import { Tag } from "../tag/Tag";

export type Article = {
  author?: User | null;
  body: string;
  comments?: Array<Comment>;
  createdAt: Date;
  description: string;
  id: string;
  slug: string | null;
  tagList?: Array<Tag>;
  title: string;
  updatedAt: Date;
};
