import { HttpResponseDto } from 'src/web/interfaces/HttpResponse';
import { ClientRequestDto } from '@util/dtos/clients/ClientRequestDto';
import { ListClientRequestDto } from '@util/dtos/clients/ListClientRequestDto';

export interface IClientsService {
	list(filters: ListClientRequestDto): Promise<HttpResponseDto>;
	get(id: number): Promise<HttpResponseDto>;
	create(payload: ClientRequestDto): Promise<HttpResponseDto>;
	update(id: number, payload: ClientRequestDto): Promise<HttpResponseDto>;
	delete(id: number): Promise<HttpResponseDto>;
}
