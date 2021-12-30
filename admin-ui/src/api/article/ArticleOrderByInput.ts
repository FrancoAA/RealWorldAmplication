import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  authorId?: SortOrder;
  body?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  slug?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
