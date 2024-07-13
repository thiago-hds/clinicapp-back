import { IAuthService } from '@services/auth/IAuthService';
import { LoginRequestDto } from '@util/dtos/auth/LoginRequestDto';
import { Response } from 'express';
import { inject } from 'inversify';
import {
	interfaces,
	controller,
	httpPost,
	response,
	requestBody,
} from 'inversify-express-utils';
import { TYPES } from 'src/ioc_types';

@controller('/auth')
export class AuthController implements interfaces.Controller {
	constructor(
		@inject(TYPES.IAuthService)
		private readonly authService: IAuthService
	) {}

	@httpPost('/login')
	private async get(
		@requestBody() body: LoginRequestDto,
		@response() res: Response
	): Promise<void> {
		const response = await this.authService.login(body);
		res.status(response.statusCode).json(response);
	}
}
