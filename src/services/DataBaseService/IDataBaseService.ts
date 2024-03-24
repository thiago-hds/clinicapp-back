import { ObjectType, Repository } from 'typeorm';

export interface IDataBaseService {
	getRepository(entity: ObjectType<any>): Promise<Repository<any>>;
}
