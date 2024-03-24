import { DataSource, ObjectType, Repository } from 'typeorm';
import appDataSource from '@database/datasource';
export class DataBaseService {
	private static dataSource: DataSource;

	async connect(): Promise<DataSource> {
		if (DataBaseService.dataSource?.isInitialized) {
			// this.logger.info('Connection Already Established!');
			return DataBaseService.dataSource;
		}

		try {
			DataBaseService.dataSource = await appDataSource.initialize();
			// this.logger.info('Connection Established!');
		} catch (error) {
			// this.logger.error(`Connection Failed. Error: ${error}`);
		}

		return DataBaseService.dataSource;
	}

	public async getRepository(
		entity: ObjectType<any>
	): Promise<Repository<any>> {
		const connection = await this.connect();
		return connection?.getRepository(entity);
	}
}
