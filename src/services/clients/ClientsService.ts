import { injectable } from 'inversify';
import { IClientsService } from './IClientsService';
import { CreateClientDto } from './dto/CreateClientDto';

@injectable()
export class ClientsService implements IClientsService {
	save(payload: CreateClientDto) {
		console.log(payload);
	}
}
