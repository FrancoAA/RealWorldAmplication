import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  articleId?: SortOrder;
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
