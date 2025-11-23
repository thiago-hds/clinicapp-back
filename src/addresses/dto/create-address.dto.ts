import { IsNotEmpty, IsNumberString, IsOptional, MaxLength } from "class-validator";

export class CreateAddressDto {
  @MaxLength(255)
  zipcode: string;

  @MaxLength(255)
  streetName: string;

  @MaxLength(255)
  @IsNumberString({ no_symbols: true })
  number: string;

  @IsNotEmpty()
  @MaxLength(255)
  district: string;

  @MaxLength(255)
  city: string;

  @MaxLength(255)
  state: string;

  @IsOptional()
  @MaxLength(255)
  addressAdditionalDetails: string;
}
