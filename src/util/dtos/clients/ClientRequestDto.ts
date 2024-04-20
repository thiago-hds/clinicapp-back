import {
	IsDateString,
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsNumberString,
	IsOptional,
	MaxLength,
} from 'class-validator';

export class ClientRequestDto {
	@IsNotEmpty()
	firstName: string;

	@IsNotEmpty()
	lastName: string;

	@IsNotEmpty()
	cpf: string;

	@IsOptional()
	@MaxLength(255)
	rg: string;

	@IsOptional()
	@IsDateString()
	// @MaxDate(new Date())
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

	@MaxLength(255)
	zipcode: string;

	@MaxLength(255)
	streetName: string;

	@MaxLength(255)
	@IsNumberString({ no_symbols: true })
	addressNumber: string;

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
