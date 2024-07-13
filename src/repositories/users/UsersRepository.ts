import { IDatabaseService } from '@services/database/IDatabaseService';
import { inject, injectable } from 'inversify';
import { TYPES } from 'src/ioc_types';
import { IUsersRepository } from './IUsersRepository';
import { User } from '@entities/User.entity';

@injectable()
export class UsersRepository implements IUsersRepository {
	constructor(
		@inject(TYPES.IDatabaseService)
		private readonly database: IDatabaseService
	) {}

	async findOneById(id: number): Promise<User | null> {
		try {
			const repo = await this.database.getRepository(User);
			return await repo.findOne({ where: { id } });
		} catch (error: any) {
			// TODO criar classes de exceções customizadas
			throw error;
		}
	}

	async findOneByEmailAndPassword(
		email: string,
		password: string
	): Promise<User | null> {
		try {
			const repo = await this.database.getRepository(User);
			return await repo.findOne({ where: { email, password } });
		} catch (error: any) {
			// TODO criar classes de exceções customizadas
			throw error;
		}
	}
}
