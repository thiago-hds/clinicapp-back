import { Client } from '@entities/Client.entity';
import { IDatabaseService } from '@services/database/IDatabaseService';
import { inject, injectable } from 'inversify';
import { TYPES } from 'src/ioc_types';
import {
	IClientsRepository,
	ListClientParams,
	PaginationParams,
} from './IClientsRepository';
import { EntityPage } from '@util/pagination/EntityPage';
import { Brackets } from 'typeorm';

@injectable()
export class ClientsRepository implements IClientsRepository {
	constructor(
		@inject(TYPES.IDatabaseService)
		private readonly database: IDatabaseService
	) {}

	async findMany(
		params: ListClientParams,
		paginationParams?: PaginationParams
	): Promise<EntityPage<Client>> {
		const repo = await this.database.getRepository(Client);
		const queryBuilder = repo.createQueryBuilder('clients');

		if (params.query) {
			queryBuilder.andWhere(
				new Brackets(qb => {
					qb.where('clients.first_name ILIKE :query').orWhere(
						'clients.last_name ILIKE :query'
					);
				}),
				{ query: `%${params.query}%` }
			);
		}

		if (paginationParams) {
			queryBuilder
				.orderBy(
					params.orderBy ? `clients.${params.orderBy}` : 'clients.id',
					paginationParams.order
				)
				.skip(paginationParams.skip)
				.take(paginationParams.take);
		}

		const [entities, count] = await queryBuilder.getManyAndCount();

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

	async delete(id: number): Promise<void> {
		const repo = await this.database.getRepository(Client);
		await repo.softDelete({
			id,
		});
	}
}
