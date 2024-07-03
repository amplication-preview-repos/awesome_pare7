import { PhotoDevice as TPhotoDevice } from "../api/photoDevice/PhotoDevice";

export const PHOTODEVICE_TITLE_FIELD = "name";

export const PhotoDeviceTitle = (record: TPhotoDevice): string => {
  return record.name?.toString() || String(record.id);
};
