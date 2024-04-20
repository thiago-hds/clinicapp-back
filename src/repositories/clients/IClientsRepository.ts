import { Client } from '@entities/Client.entity';
import { PageOptionsDto } from '@util/dtos/pagination/PageOptionsDto';
import { EntityPage } from '@util/pagination/EntityPage';

export interface IClientsRepository {
	findMany(pageOptionsDto: PageOptionsDto): Promise<EntityPage<Client>>;
	save(client: Client): Promise<Client>;
	findOneByCpf(cpf: string): Promise<Client>;
	findOneById(id: number): Promise<Client>;
}
