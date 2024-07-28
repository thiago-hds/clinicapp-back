import container from './ioc_config';
import dotenv from 'dotenv';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from 'express';
import bodyParser from 'body-parser';
import {
	initializeTransactionalContext,
	StorageDriver,
} from 'typeorm-transactional';
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const origin =
// 	process.env.NODE_ENV === 'development'
// 		? 'http://localhost:3000'
// 		: 'http://example.com';

const origin = 'http://localhost:3000';

export class App {
	constructor() {
		this.setup();
	}

	async setup() {
		dotenv.config();

		initializeTransactionalContext({
			storageDriver: StorageDriver.ASYNC_LOCAL_STORAGE,
		});

		const port = process.env.PORT ?? 8000;
		const server = new InversifyExpressServer(container);
		server.setConfig(app => {
			app.use(cors({ credentials: true, origin }));
			app.use(cookieParser());
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
