import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { BaseMiddleware } from 'inversify-express-utils';
import jwt from 'jsonwebtoken';
import { TYPES } from 'src/ioc_types';
import { IUsersRepository } from 'src/repositories/users/IUsersRepository';
@injectable()
export class JwtVerifierMiddleware extends BaseMiddleware {
	@inject(TYPES.IUsersRepository)
	private readonly usersRepository: IUsersRepository;

	async handler(req: Request, res: Response, next: NextFunction) {
		const { accessToken } = req.cookies;

		if (!accessToken) {
			return res.status(401).send({ message: 'Unauthorized1' });
		}

		let userId = null;
		try {
			const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
			userId = decoded.id;
		} catch (err) {
			console.log(err);
			return res.status(401).send({ message: 'Unauthorized' });
		}

		if (!userId) {
			return res.status(401).send({ message: 'Unauthorized' });
		}

		const user = await this.usersRepository.findOneById(userId);

		req.user = user;

		return next();
	}
}
