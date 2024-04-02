import { Address } from '@entities/Address.entity';

export interface IAddressesRepository {
	save(client: Address): Promise<Address>;
}
