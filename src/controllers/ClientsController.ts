import { IClientsService } from '@services/clients/IClientsService';
import { ClientePostRequestDto } from '@services/clients/dto/ClientPostRequestDto';
import * as express from 'express';
import { inject } from 'inversify';
import {
	interfaces,
	controller,
	httpGet,
	httpPost,
	request,
	response,
	requestBody,
} from 'inversify-express-utils';

@controller('/clients')
export class ClientsController implements interfaces.Controller {
	constructor(
		@inject('IClientsService')
		private readonly clientsService: IClientsService
	) {}

	@httpGet('/')
	private index(@request() req: Request, @response() res: Response): object {
		return { ok: true };
	}

	@httpPost('/')
	private async save(
		@requestBody() body: ClientePostRequestDto
	): Promise<object> {
		console.log('body', body);
		return this.clientsService.save(body);
	}
}
