import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PhotoDeviceService } from "./photoDevice.service";
import { PhotoDeviceControllerBase } from "./base/photoDevice.controller.base";

@swagger.ApiTags("photoDevices")
@common.Controller("photoDevices")
export class PhotoDeviceController extends PhotoDeviceControllerBase {
  constructor(protected readonly service: PhotoDeviceService) {
    super(service);
  }
}
