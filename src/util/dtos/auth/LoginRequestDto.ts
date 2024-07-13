import { IsEmail, IsOptional, MaxLength } from 'class-validator';

export class LoginRequestDto {
	@IsEmail()
	@MaxLength(255)
	email: string;

	@IsOptional()
	@MaxLength(255)
	password: string;
}
