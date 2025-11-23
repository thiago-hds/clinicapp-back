import { Type } from "class-transformer";
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  Validate,
  ValidateNested,
} from "class-validator";
import { CreateAddressDto } from "src/addresses/dto/create-address.dto";
import { IsCpfValidator } from "src/common/validators/is-cpf.validator";

export class CreateClientDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @Validate(IsCpfValidator)
  cpf: string;

  @IsOptional()
  @MaxLength(255)
  rg: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth: string;

  @IsOptional()
  @IsDateString()
  dateOfFirstVisit: string;

  @IsOptional()
  notes: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsOptional()
  @MaxLength(255)
  occupation: string;

  @IsOptional()
  @MaxLength(255)
  howTheyFoundUs: string;

  @IsOptional()
  @MaxLength(255)
  landlinePhone: string;

  @IsOptional()
  @MaxLength(255)
  mobilePhone: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
