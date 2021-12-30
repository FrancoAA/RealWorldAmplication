import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  article?: ArticleWhereUniqueInput;
  body?: StringFilter;
  id?: StringFilter;
};
