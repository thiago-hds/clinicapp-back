import { Order } from '@util/constants/Order';
import { IsInt, Max, Min } from 'class-validator';

// TODO validar com class-validator
export class PageOptionsDto {
	readonly order?: Order = Order.ASC;
	readonly page?: number = 1;

	@IsInt()
	@Min(1)
	@Max(50)
	readonly take?: number = 20;

	get skip(): number {
		return (this.page - 1) * this.take;
	}
}
