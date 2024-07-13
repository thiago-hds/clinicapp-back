export const TYPES = {
	// ValidateRequestMiddleware: Symbol.for('ValidateRequestMiddleware'),

	JwtVerifierMiddleware: Symbol.for('JwtVerifierMiddleware'),

	IClientsService: Symbol.for('IClientsService'),
	IAuthService: Symbol.for('IAuthService'),
	IDatabaseService: Symbol.for('IDatabaseService'),

	IClientsRepository: Symbol.for('IClientsRepository'),
	IAddressesRepository: Symbol.for('IAddressesRepository'),
	IUsersRepository: Symbol.for('IUsersRepository'),
};
