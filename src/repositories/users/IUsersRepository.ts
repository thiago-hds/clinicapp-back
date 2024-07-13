import { User } from '@entities/User.entity';
import { Order } from '@util/constants/Order';

export interface IUsersRepository {
	findOneById(id: number): Promise<User | null>;
	findOneByEmailAndPassword(
		email: string,
		password: string
	): Promise<User | null>;
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
