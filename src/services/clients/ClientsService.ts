import { inject, injectable } from 'inversify';
import { IClientsService } from './IClientsService';
import { TYPES } from 'src/ioc_types';
import { IClientsRepository, IAddressesRepository } from 'src/repositories';
import { Client, Address } from '@entities/index';
import { removeNonNumberCharacters } from '@util/formatter';
import { HttpResponseDto } from 'src/web/interfaces/HttpResponse';
import { ClientRequestDto } from '@util/dtos/clients/ClientRequestDto';
import { ClientResponseDto } from '@util/dtos/clients/ClientResponseDto';
import { PageMetaDto } from '@util/dtos/pagination/PageMetaDto';
import { PageDto } from '@util/dtos/pagination/PageDto';
import { ListClientRequestDto } from '@util/dtos/clients/ListClientRequestDto';
import { Transactional } from 'typeorm-transactional';

@injectable()
export class ClientsService implements IClientsService {
	constructor(
		@inject(TYPES.IClientsRepository)
		private readonly clientsRepository: IClientsRepository,
		@inject(TYPES.IAddressesRepository)
		private readonly addressesRepository: IAddressesRepository
	) {}

	async list(listClientDto: ListClientRequestDto): Promise<HttpResponseDto> {
		console.log(listClientDto);
		const clientPage = await this.clientsRepository.findMany(
			{ query: listClientDto.query, orderBy: listClientDto.orderBy },
			{
				take: listClientDto.take,
				skip: listClientDto.skip,
				order: listClientDto.order,
			}
		);

		const dtos = clientPage.items.map(item =>
			ClientResponseDto.fromEntity(item)
		);

		const pageMetaDto = new PageMetaDto({
			pageOptionsDto: listClientDto,
			itemCount: clientPage.totalCount,
		});
		const pageDto = new PageDto(dtos, pageMetaDto);

		return {
			statusCode: 200,
			success: true,
			...pageDto,
		};
	}

	async get(id: number): Promise<HttpResponseDto> {
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
			data: ClientResponseDto.fromEntity(client),
		};
	}

	async delete(id: number): Promise<HttpResponseDto> {
		const client = await this.clientsRepository.findOneById(id);
		if (!client) {
			return {
				statusCode: 404,
				success: false,
				message: 'Not found',
			};
		}

		this.clientsRepository.delete(id);

		return {
			statusCode: 200,
			success: true,
			message: 'clients.delete.success',
		};
	}

	async create(payload: ClientRequestDto): Promise<HttpResponseDto> {
		const cpf = removeNonNumberCharacters(payload.cpf);
		const cpfExists = await this.clientsRepository.findOneByCpf(cpf);

		if (cpfExists) {
			return {
				statusCode: 400,
				success: false,
				message: 'clients.save.error.CpfAlreadyExists',
			};
		}

		await this.saveClient(new Client(), payload);

		return {
			statusCode: 201,
			success: true,
			message: 'clients.save.success',
		};
	}

	async update(
		id: number,
		payload: ClientRequestDto
	): Promise<HttpResponseDto> {
		const client = await this.clientsRepository.findOneById(id);

		if (!client) {
			return {
				statusCode: 400,
				success: false,
				message: 'clients.update.error.idDoesntExist',
			};
		}

		const cpf = removeNonNumberCharacters(payload.cpf);
		const cpfExists = await this.clientsRepository.findOneByCpf(cpf);

		if (cpfExists && cpfExists.id != id) {
			return {
				statusCode: 400,
				success: false,
				message: 'clients.update.error.cpfAlreadyExists',
			};
		}

		await this.saveClient(client, payload);

		return {
			statusCode: 201,
			success: true,
			message: 'clients.update.success',
		};
	}

	@Transactional()
	private async saveClient(client: Client, payload: ClientRequestDto) {
		const address = client.address ?? new Address();
		address.zipcode = removeNonNumberCharacters(payload.zipcode);
		address.streetName = payload.streetName;
		address.number = payload.addressNumber;
		address.district = payload.district;
		address.city = payload.city;
		address.state = payload.state;
		address.additionalDetails = payload.addressAdditionalDetails;
		await this.addressesRepository.save(address);

		client.firstName = payload.firstName;
		client.lastName = payload.lastName;
		client.cpf = removeNonNumberCharacters(payload.cpf);
		client.rg = payload.rg;
		client.occupation = payload.occupation;
		client.howTheyFoundUs = payload.howTheyFoundUs;
		client.dateOfBirth = payload.dateOfBirth;
		client.dateOfFirstVisit = payload.dateOfFirstVisit;
		client.notes = payload.notes;
		client.email = payload.email;
		client.landlinePhone = payload.landlinePhone;
		client.mobilePhone = payload.mobilePhone;
		client.address = address;

		return await this.clientsRepository.save(client);
	}
}
