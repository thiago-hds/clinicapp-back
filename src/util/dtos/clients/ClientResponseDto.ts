import { Client } from '@entities/Client.entity';
import { AddressDto } from '../addresses/AddressDto';

export class ClientResponseDto {
	id: number | null = null;
	firstName: string = '';
	lastName: string = '';
	cpf: string = '';
	rg: string = '';
	dateOfBirth: Date | null = null;
	dateOfFirstVisit: Date | null = null;
	notes: string = '';
	occupation: string = '';
	email: string = '';
	landlinePhone: string = '';
	mobilePhone: string = '';
	howTheyFoundUs: string = '';
	address: AddressDto | null = null;

	public static fromEntity(client: Client): ClientResponseDto {
		const dto = new ClientResponseDto();
		dto.id = client.id;
		dto.firstName = client.firstName;
		dto.lastName = client.lastName;
		dto.cpf = client.cpf;
		dto.rg = client.rg;
		dto.dateOfBirth = client.dateOfBirth;
		dto.dateOfFirstVisit = client.dateOfFirstVisit;
		dto.notes = client.notes;
		dto.occupation = client.occupation;
		dto.email = client.email;
		dto.landlinePhone = client.landlinePhone;
		dto.mobilePhone = client.mobilePhone;
		dto.howTheyFoundUs = client.howTheyFoundUs;

		if (client.address) {
			dto.address = AddressDto.fromEntity(client.address);
		}

		return dto;
	}
}
