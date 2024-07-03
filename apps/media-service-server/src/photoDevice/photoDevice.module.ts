import { Module } from "@nestjs/common";
import { PhotoDeviceModuleBase } from "./base/photoDevice.module.base";
import { PhotoDeviceService } from "./photoDevice.service";
import { PhotoDeviceController } from "./photoDevice.controller";
import { PhotoDeviceResolver } from "./photoDevice.resolver";

@Module({
  imports: [PhotoDeviceModuleBase],
  controllers: [PhotoDeviceController],
  providers: [PhotoDeviceService, PhotoDeviceResolver],
  exports: [PhotoDeviceService],
})
export class PhotoDeviceModule {}
