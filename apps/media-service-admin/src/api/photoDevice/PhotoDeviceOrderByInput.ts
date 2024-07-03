import { SortOrder } from "../../util/SortOrder";

export type PhotoDeviceOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  releaseDate?: SortOrder;
  updatedAt?: SortOrder;
};
