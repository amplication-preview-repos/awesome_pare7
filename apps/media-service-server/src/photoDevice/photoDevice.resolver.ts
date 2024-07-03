import * as graphql from "@nestjs/graphql";
import { PhotoDeviceResolverBase } from "./base/photoDevice.resolver.base";
import { PhotoDevice } from "./base/PhotoDevice";
import { PhotoDeviceService } from "./photoDevice.service";

@graphql.Resolver(() => PhotoDevice)
export class PhotoDeviceResolver extends PhotoDeviceResolverBase {
  constructor(protected readonly service: PhotoDeviceService) {
    super(service);
  }
}
