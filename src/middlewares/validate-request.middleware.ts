import { plainToClass } from 'class-transformer';
import { ValidationError, validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validateRequestDtoMiddleware(
	type: any,
	errorCodePrefix: string
) {
	return async function (req: Request, res: Response, next: NextFunction) {
		const dto = plainToClass(type, req.body);
		const validationResults = await validate(dto);

		if (validationResults.length > 0) {
			const errors = validationResults.map((error: ValidationError) => {
				const constraints = error?.constraints
					? Object.keys(error.constraints)
					: [];

				return {
					field: error.property,
					codes: constraints.map(
						constraint =>
							`${errorCodePrefix}.error.${error.property}.${constraint}`
					),
					messages: error.constraints,
				};
			});

			const response = {
				statusCode: 400,
				success: false,
				errors,
			};

			res.status(response.statusCode).json(response);
		} else {
			req.body = dto;
			next();
		}
	};
}
