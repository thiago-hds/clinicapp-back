import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { addTransactionalDataSource } from 'typeorm-transactional';

dotenv.config();

const appDataSource = new DataSource({
	type: 'postgres',
	logging: false,
	host: process.env.POSTGRES_HOST,
	port: Number(process.env.POSTGRES_PORT),
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.DATABASE_NAME,
	entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
	migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
	migrationsTableName: 'clinicapp_migrations',
});

export default addTransactionalDataSource(appDataSource);
