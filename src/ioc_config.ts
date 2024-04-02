import { Container } from 'inversify';
import 'reflect-metadata';
import './controllers/ClientsController';
import { ClientsService } from '@services/clients/ClientsService';
import { IClientsService } from '@services/clients/IClientsService';
import { TYPES } from './ioc_types';
import { IDatabaseService } from '@services/database/IDatabaseService';
import { DatabaseService } from '@services/database/DatabaseService';
import {
	IClientsRepository,
	ClientsRepository,
	AddressesRepository,
	IAddressesRepository,
} from './repositories';

const container = new Container({ defaultScope: 'Singleton' });

// SERVICES
container.bind<IDatabaseService>(TYPES.IDatabaseService).to(DatabaseService);
container.bind<IClientsService>(TYPES.IClientsService).to(ClientsService);

// REPOSITORIES
container
	.bind<IClientsRepository>(TYPES.IClientsRepository)
	.to(ClientsRepository);
container
	.bind<IAddressesRepository>(TYPES.IAddressesRepository)
	.to(AddressesRepository);

export default container;
