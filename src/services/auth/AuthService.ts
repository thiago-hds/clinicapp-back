import { inject, injectable } from 'inversify';

import { TYPES } from 'src/ioc_types';

import { HttpResponseDto } from 'src/web/interfaces/HttpResponse';
import { IAuthService } from './IAuthService';
import { LoginRequestDto } from '@util/dtos/auth/LoginRequestDto';
import { IUsersRepository } from 'src/repositories/users/IUsersRepository';
import jwt from 'jsonwebtoken';

@injectable()
export class AuthService implements IAuthService {
	constructor(
		@inject(TYPES.IUsersRepository)
		private readonly usersRepository: IUsersRepository
	) {}

	async login(payload: LoginRequestDto): Promise<HttpResponseDto> {
		const user = await this.usersRepository.findOneByEmailAndPassword(
			payload.email,
			payload.password
		);

		if (!user) {
			return {
				statusCode: 422,
				success: false,
				message: 'auth.login.error.notRecognized',
			};
		}

		const token = jwt.sign(
			{ id: user?.id, email: user.email },
			process.env.JWT_SECRET,
			{
				expiresIn: '1d',
			}
		);

		return {
			statusCode: 201,
			success: true,
			data: {
				token,
			},
		};
	}
}
