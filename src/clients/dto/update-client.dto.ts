import { OmitType, PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { CreateAddressDto } from "src/addresses/dto/create-address.dto";
import { CreateClientDto } from "./create-client.dto";

/** `address` is optional on PATCH; when sent, it is validated as `CreateAddressDto`. */
export class UpdateClientDto extends PartialType(OmitType(CreateClientDto, ["address"] as const)) {
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address?: CreateAddressDto;
}
