import {
	IsDateString,
	IsEmail,
	IsNotEmpty,
	IsOptional,
	MaxLength,
} from 'class-validator';
import { PageOptionsDto } from '../pagination/PageOptionsDto';

export class ListClientDto extends PageOptionsDto {
	name: string;
}
