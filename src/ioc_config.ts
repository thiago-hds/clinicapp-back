import { Container } from 'inversify';
import 'reflect-metadata';
import './controllers/clients/ClientsController';
import './controllers/auth/AuthController';
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
import { IAuthService } from '@services/auth/IAuthService';
import { AuthService } from '@services/auth/AuthService';
import { UsersRepository } from './repositories/users/UsersRepository';
import { IUsersRepository } from './repositories/users/IUsersRepository';
import { JwtVerifierMiddleware } from './middlewares/jwt-verifier.middleware';

const container = new Container({ defaultScope: 'Singleton' });

// MIDDLEWARES
container
	.bind<JwtVerifierMiddleware>(TYPES.JwtVerifierMiddleware)
	.to(JwtVerifierMiddleware);

// SERVICES
container.bind<IDatabaseService>(TYPES.IDatabaseService).to(DatabaseService);
container.bind<IClientsService>(TYPES.IClientsService).to(ClientsService);
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService);

// REPOSITORIES
container
	.bind<IClientsRepository>(TYPES.IClientsRepository)
	.to(ClientsRepository);
container
	.bind<IAddressesRepository>(TYPES.IAddressesRepository)
	.to(AddressesRepository);
container.bind<IUsersRepository>(TYPES.IUsersRepository).to(UsersRepository);

export default container;
