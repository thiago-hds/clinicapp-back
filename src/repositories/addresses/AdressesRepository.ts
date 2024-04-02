import { Address } from '@entities/Address.entity';
import { IDatabaseService } from '@services/database/IDatabaseService';
import { inject, injectable } from 'inversify';
import { TYPES } from 'src/ioc_types';
import { IAddressesRepository } from './IAdressesRepository';

@injectable()
export class AddressesRepository implements IAddressesRepository {
	constructor(
		@inject(TYPES.IDatabaseService)
		private readonly database: IDatabaseService
	) {}

	async save(address: Address) {
		try {
			const repo = await this.database.getRepository(Address);
			return await repo.save(address);
		} catch (error: any) {
			// TODO criar classes de exceções customizadas
			throw error;
		}
	}
}
