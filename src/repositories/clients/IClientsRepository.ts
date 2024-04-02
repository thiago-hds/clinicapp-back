import { Client } from '@entities/Client.entity';
import { ClientDto } from '@util/dtos/clients/ClientDto';
import { PageDto } from '@util/dtos/pagination/PageDto';
import { PageOptionsDto } from '@util/dtos/pagination/PageOptionsDto';

export interface IClientsRepository {
	findMany(pageOptionsDto: PageOptionsDto): Promise<PageDto<ClientDto>>;
	save(client: Client): Promise<Client>;
	findOneByCpf(cpf: string): Promise<Client>;
}
