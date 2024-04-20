import { HttpResponseDto } from 'src/web/interfaces/HttpResponse';
import { ListClientDto } from '@util/dtos/clients/ListClientDto';
import { ClientRequestDto } from '@util/dtos/clients/ClientRequestDto';

export interface IClientsService {
	list(filters: ListClientDto): Promise<HttpResponseDto>;
	get(id: number): Promise<HttpResponseDto>;
	create(payload: ClientRequestDto): Promise<HttpResponseDto>;
	update(id: number, payload: ClientRequestDto): Promise<HttpResponseDto>;
}
