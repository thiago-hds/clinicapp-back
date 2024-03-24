import * as express from 'express';
import {
	interfaces,
	controller,
	httpGet,
	httpPost,
	httpDelete,
	request,
	queryParam,
	response,
	requestParam,
} from 'inversify-express-utils';
import { injectable, inject } from 'inversify';

@controller('/clients')
export class ClientsController implements interfaces.Controller {
	// constructor(@inject('FooService') private fooService: FooService) {}

	@httpGet('/')
	private index(
		@request() req: express.Request,
		@response() res: express.Response
	): object {
		return { ok: true };
	}
}
