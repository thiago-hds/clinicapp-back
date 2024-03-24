import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateClientDto {
	@IsString()
	name: string;
}
