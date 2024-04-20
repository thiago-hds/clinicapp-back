import { Address } from '@entities/Address.entity';

export class AddressDto {
	id: number | null = null;
	zipcode: string = '';
	streetName: string = '';
	district: string = '';
	city: string = '';
	state: string = '';
	number: string = '';
	additionalDetails = '';

	public static fromEntity(address: Address): AddressDto {
		const dto = new AddressDto();
		dto.id = address.id;
		dto.zipcode = address.zipcode;
		dto.streetName = address.streetName;
		dto.district = address.district;
		dto.city = address.city;
		dto.state = address.state;
		dto.number = address.number;
		dto.additionalDetails = address.additionalDetails;
		return dto;
	}
}
