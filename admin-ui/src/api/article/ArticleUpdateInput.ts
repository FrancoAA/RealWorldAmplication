import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArticleUpdateInput = {
  author?: UserWhereUniqueInput | null;
  body?: string;
  description?: string;
  slug?: string | null;
  title?: string;
};
