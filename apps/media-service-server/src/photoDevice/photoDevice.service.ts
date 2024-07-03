import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhotoDeviceServiceBase } from "./base/photoDevice.service.base";

@Injectable()
export class PhotoDeviceService extends PhotoDeviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
