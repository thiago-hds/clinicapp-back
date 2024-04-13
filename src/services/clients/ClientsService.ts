import { inject, injectable } from 'inversify';
import { IClientsService } from './IClientsService';
import { TYPES } from 'src/ioc_types';
import { IClientsRepository, IAddressesRepository } from 'src/repositories';
import { Client, Address } from '@entities/index';
import { removeNonNumberCharacters } from '@util/formatter';
import { HttpResponse } from 'src/web/interfaces/HttpResponse';
import { CreateClientDto } from '@util/dtos/clients/CreateClientDto';
import { PageOptionsDto } from '@util/dtos/pagination/PageOptionsDto';
import { ListClientDto } from '@util/dtos/clients/ListClientDto';
import { ClientDto } from '@util/dtos/clients/ClientDto';

@injectable()
export class ClientsService implements IClientsService {
	constructor(
		@inject(TYPES.IClientsRepository)
		private readonly clientsRepository: IClientsRepository,
		@inject(TYPES.IAddressesRepository)
		private readonly addressesRepository: IAddressesRepository
	) {}

	async list(filters: ListClientDto): Promise<HttpResponse> {
		console.log(filters);
		const clients = await this.clientsRepository.findMany(filters);

		return {
			statusCode: 200,
			success: true,
			...clients,
		};
	}

	async get(id: number): Promise<HttpResponse> {
		const client = await this.clientsRepository.findOneById(id);

		if (!client) {
			return {
				statusCode: 404,
				success: false,
				message: 'Not found',
			};
		}
		return {
			statusCode: 200,
			success: true,
			data: ClientDto.fromEntity(client),
		};
	}

	async save(payload: CreateClientDto): Promise<HttpResponse> {
		const cpf = removeNonNumberCharacters(payload.cpf);
		const clientExists = await this.clientsRepository.findOneByCpf(cpf);

		if (clientExists) {
			return {
				statusCode: 400,
				success: false,
				message: 'clients.save.error.CpfAlreadyExists',
			};
		}

		const address = new Address();
		address.zipcode = removeNonNumberCharacters(payload.zipcode);
		address.streetName = payload.streetName;
		address.district = payload.district;
		address.city = payload.city;
		address.state = payload.state;
		await this.addressesRepository.save(address);

		const client = new Client();
		client.name = payload.name;
		client.cpf = cpf;
		client.rg = payload.rg;

		client.dateOfBirth = payload.dateOfBirth
			? new Date(payload.dateOfBirth)
			: null;

		client.dateOfFirstVisit = payload.dateOfFirstVisit
			? new Date(payload.dateOfFirstVisit)
			: null;

		client.notes = payload.notes;
		client.email = payload.email;
		client.landlinePhone = payload.landlinePhone;
		client.mobilePhone = payload.mobilePhone;
		client.address = address;
		console.log(client);
		await this.clientsRepository.save(client);

		return {
			statusCode: 201,
			success: true,
			message: 'clients.save.success',
		};
	}
}
