import { Client } from '@entities/Client.entity';
import { IDatabaseService } from '@services/database/IDatabaseService';
import { inject, injectable } from 'inversify';
import { TYPES } from 'src/ioc_types';
import { IClientsRepository } from './IClientsRepository';
import { ClientDto } from '@util/dtos/clients/ClientDto';
import { PageOptionsDto } from '@util/dtos/pagination/PageOptionsDto';
import { PageDto } from '@util/dtos/pagination/PageDto';
import { PageMetaDto } from '@util/dtos/pagination/PageMetaDto';
import { ItemPage } from '@util/pagination/ItemPage';
import { EntityPage } from '@util/pagination/EntityPage';

@injectable()
export class ClientsRepository implements IClientsRepository {
	constructor(
		@inject(TYPES.IDatabaseService)
		private readonly database: IDatabaseService
	) {}

	async findMany(
		pageOptionsDto: PageOptionsDto
	): Promise<EntityPage<Client>> {
		const repo = await this.database.getRepository(Client);
		const queryBuilder = repo.createQueryBuilder('clients');

		queryBuilder
			.orderBy('clients.created_at', pageOptionsDto.order)
			.skip(pageOptionsDto.skip)
			.take(pageOptionsDto.take);

		const count = await queryBuilder.getCount();
		const { entities } = await queryBuilder.getRawAndEntities();

		return new EntityPage(entities, count);
	}

	async save(client: Client) {
		try {
			const repo = await this.database.getRepository(Client);
			return await repo.save(client);
		} catch (error: any) {
			// TODO criar classes de exceções customizadas
			throw error;
		}
	}

	async findOneByCpf(cpf: string): Promise<Client> {
		try {
			const repo = await this.database.getRepository(Client);
			return await repo.findOne({ where: { cpf } });
		} catch (error: any) {
			// TODO criar classes de exceções customizadas
			throw error;
		}
	}

	async findOneById(id: number): Promise<Client> {
		try {
			const repo = await this.database.getRepository(Client);
			return await repo.findOne({
				where: { id },
				relations: {
					address: true,
				},
			});
		} catch (error: any) {
			// TODO criar classes de exceções customizadas
			throw error;
		}
	}
}
