import container from './ioc_config';
import dotenv from 'dotenv';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from 'express';

export class App {
	constructor() {
		this.setup();
	}

	async setup() {
		dotenv.config();

		const port = process.env.PORT ?? 8000;
		const server = new InversifyExpressServer(container);
		server.setConfig(app => {
			app.use(express.json());
		});

		const app = server.build();
		app.listen(port, () => {
			console.log(`Server is listening at http://localhost:${port}`);
		});
	}
}
