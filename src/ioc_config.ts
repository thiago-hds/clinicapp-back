import { Container } from 'inversify';
import 'reflect-metadata';
import './controllers/ClientsController';
import { ClientsService } from '@services/clients/ClientsService';
import { IClientsService } from '@services/clients/IClientsService';

const container = new Container({ defaultScope: 'Singleton' });

container.bind<IClientsService>('IClientsService').to(ClientsService);

export default container;
