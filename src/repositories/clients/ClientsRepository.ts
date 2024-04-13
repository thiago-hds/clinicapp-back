import { Client } from '@entities/Client.entity';
import { IDatabaseService } from '@services/database/IDatabaseService';
import { inject, injectable } from 'inversify';
import { TYPES } from 'src/ioc_types';
import { IClientsRepository } from './IClientsRepository';
import { ClientDto } from '@util/dtos/clients/ClientDto';
import { PageOptionsDto } from '@util/dtos/pagination/PageOptionsDto';
import { PageDto } from '@util/dtos/pagination/PageDto';
import { PageMetaDto } from '@util/dtos/pagination/PageMetaDto';

@injectable()
export class ClientsRepository implements IClientsRepository {
	constructor(
		@inject(TYPES.IDatabaseService)
		private readonly database: IDatabaseService
	) {}

	async findMany(
		pageOptionsDto: PageOptionsDto
	): Promise<PageDto<ClientDto>> {
		const queryBuilder = (
			await this.database.getRepository(Client)
		).createQueryBuilder('clients');

		queryBuilder
			.orderBy('clients.created_at', pageOptionsDto.order)
			.skip(pageOptionsDto.skip)
			.take(pageOptionsDto.take);

		const itemCount = await queryBuilder.getCount();
		const { entities } = await queryBuilder.getRawAndEntities();

		const dtos = entities.map(item => ClientDto.fromEntity(item));

		const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
		return new PageDto(dtos, pageMetaDto);
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
			return await repo.findOneBy({ id });
		} catch (error: any) {
			// TODO criar classes de exceções customizadas
			throw error;
		}
	}
}
