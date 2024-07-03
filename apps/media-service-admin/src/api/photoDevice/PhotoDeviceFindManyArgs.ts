import { PhotoDeviceWhereInput } from "./PhotoDeviceWhereInput";
import { PhotoDeviceOrderByInput } from "./PhotoDeviceOrderByInput";

export type PhotoDeviceFindManyArgs = {
  where?: PhotoDeviceWhereInput;
  orderBy?: Array<PhotoDeviceOrderByInput>;
  skip?: number;
  take?: number;
};
