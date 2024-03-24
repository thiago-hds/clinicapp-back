import container from './ioc_config';
import dotenv from 'dotenv';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from 'express';
import bodyParser from 'body-parser';

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
			app.use(
				bodyParser.urlencoded({
					extended: false,
				})
			);
			app.use(bodyParser.json());
		});

		const app = server.build();
		app.listen(port, () => {
			console.log(`Server is listening at http://localhost:${port}`);
		});
	}
}
