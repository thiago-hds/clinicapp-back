import { Client } from '@entities/Client.entity';
import { Order } from '@util/constants/Order';
import { EntityPage } from '@util/pagination/EntityPage';

export interface IClientsRepository {
	findMany(
		params: ListClientParams,
		paginationParams?: PaginationParams
	): Promise<EntityPage<Client>>;
	save(client: Client): Promise<Client>;
	findOneByCpf(cpf: string): Promise<Client>;
	findOneById(id: number): Promise<Client>;
	delete(id: number): Promise<void>;
}

export interface ListClientParams {
	query?: string;
	orderBy?: ClientSortOptions;
}

export interface PaginationParams {
	take: number;
	skip: number;
	order: Order;
}

export enum ClientSortOptions {
	Name = 'name',
}
