import { PageOptionsDto } from '../pagination/PageOptionsDto';
import { ClientSortOptions } from 'src/repositories';

export class ListClientRequestDto extends PageOptionsDto {
	query: string;
	orderBy: ClientSortOptions;
}
