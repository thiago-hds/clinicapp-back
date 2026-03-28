import { IsNotEmpty, IsNumberString, IsOptional, MaxLength } from "class-validator";

/** If the parent sends `address`, zipcode, street, number, city and state are required. */
export class CreateAddressDto {
  @IsNotEmpty()
  @MaxLength(255)
  zipcode: string;

  @IsNotEmpty()
  @MaxLength(255)
  streetName: string;

  @IsNotEmpty()
  @MaxLength(255)
  @IsNumberString({ no_symbols: true })
  number: string;

  @IsOptional()
  @MaxLength(255)
  district?: string;

  @IsNotEmpty()
  @MaxLength(255)
  city: string;

  @IsNotEmpty()
  @MaxLength(255)
  state: string;

  @IsOptional()
  @MaxLength(255)
  addressAdditionalDetails?: string;
}
