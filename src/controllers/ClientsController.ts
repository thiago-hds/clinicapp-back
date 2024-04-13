import { IClientsService } from '@services/clients/IClientsService';
import { CreateClientDto } from '@util/dtos/clients/CreateClientDto';
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
	private async index(
		@queryParam() params: ListClientDto,
		@response() res: Response
	): Promise<void> {
		const response = await this.clientsService.list(params);
		res.status(response.statusCode).json(response);
	}

	@httpPost('/', validateRequestDtoMiddleware(CreateClientDto, 'client'))
	private async save(
		@response() res: Response,
		@requestBody() body: CreateClientDto
	): Promise<void> {
		const response = await this.clientsService.save(body);
		res.status(response.statusCode).json(response);
	}
}
