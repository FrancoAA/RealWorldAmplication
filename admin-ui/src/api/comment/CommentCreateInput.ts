import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type CommentCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  body: string;
};
