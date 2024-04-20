import { IClientsService } from '@services/clients/IClientsService';
import { ClientRequestDto } from '@util/dtos/clients/ClientRequestDto';
import { ListClientDto } from '@util/dtos/clients/ListClientDto';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
	interfaces,
	controller,
	httpGet,
	httpPost,
	request,
	response,
	requestBody,
	requestParam,
	queryParam,
	httpPut,
} from 'inversify-express-utils';
import { TYPES } from 'src/ioc_types';
import { validateRequestDtoMiddleware } from 'src/middlewares/validate-request.middleware';

@controller('/clients')
export class ClientsController implements interfaces.Controller {
	constructor(
		@inject(TYPES.IClientsService)
		private readonly clientsService: IClientsService
	) {}

	@httpGet('/:id')
	private async get(
		@requestParam('id') id: number,
		@response() res: Response
	): Promise<void> {
		const response = await this.clientsService.get(id);
		res.status(response.statusCode).json(response);
	}

	@httpGet('/')
	private async list(
		@queryParam() params: ListClientDto,
		@response() res: Response
	): Promise<void> {
		const response = await this.clientsService.list(params);
		res.status(response.statusCode).json(response);
	}

	@httpPost('/', validateRequestDtoMiddleware(ClientRequestDto, 'client'))
	private async create(
		@response() res: Response,
		@requestBody() body: ClientRequestDto
	): Promise<void> {
		const response = await this.clientsService.create(body);
		res.status(response.statusCode).json(response);
	}

	@httpPut('/:id', validateRequestDtoMiddleware(ClientRequestDto, 'client'))
	private async update(
		@requestParam('id') id: number,
		@requestBody() body: ClientRequestDto,
		@response() res: Response
	): Promise<void> {
		const response = await this.clientsService.update(id, body);
		res.status(response.statusCode).json(response);
	}
}
