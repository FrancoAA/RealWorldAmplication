import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type CommentUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  body?: string;
};
