import { HttpResponse } from 'src/web/interfaces/HttpResponse';
import { ListClientDto } from '@util/dtos/clients/ListClientDto';
import { CreateClientDto } from '@util/dtos/clients/CreateClientDto';

export interface IClientsService {
	list(filters: ListClientDto): Promise<HttpResponse>;
	get(id: number): Promise<HttpResponse>;
	save(payload: CreateClientDto): Promise<HttpResponse>;
}
