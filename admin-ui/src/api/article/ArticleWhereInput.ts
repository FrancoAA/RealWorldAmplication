import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ArticleWhereInput = {
  author?: UserWhereUniqueInput;
  body?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  slug?: StringNullableFilter;
  title?: StringFilter;
};
