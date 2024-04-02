import { DataSource, ObjectType, Repository } from 'typeorm';
import appDataSource from '@database/datasource';
import { injectable } from 'inversify';

@injectable()
export class DatabaseService {
	private static dataSource: DataSource;

	async connect(): Promise<DataSource> {
		if (DatabaseService.dataSource?.isInitialized) {
			// this.logger.info('Connection Already Established!');
			return DatabaseService.dataSource;
		}

		try {
			DatabaseService.dataSource = await appDataSource.initialize();
			// this.logger.info('Connection Established!');
		} catch (error) {
			// this.logger.error(`Connection Failed. Error: ${error}`);
		}

		return DatabaseService.dataSource;
	}

	public async getRepository(
		entity: ObjectType<any>
	): Promise<Repository<any>> {
		const connection = await this.connect();
		return connection?.getRepository(entity);
	}
}
