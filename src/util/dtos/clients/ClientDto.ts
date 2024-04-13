import { Client } from '@entities/Client.entity';

export class ClientDto {
	name: string;
	cpf: string;

	public static fromEntity(client: Client): ClientDto {
		const dto = new ClientDto();
		dto.name = client.name;
		dto.cpf = client.cpf;
		return dto;
	}
}
