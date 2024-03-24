import { Container } from 'inversify';
import 'reflect-metadata';
import './controllers/ClientsController';

const container = new Container({ defaultScope: 'Singleton' });

export default container;
