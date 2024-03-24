import { CreateClientDto } from './dto/CreateClientDto';

export interface IClientsService {
	save(payload: CreateClientDto): any;
}
