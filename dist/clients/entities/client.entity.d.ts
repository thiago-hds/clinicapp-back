import { Address } from 'src/addresses/entities/address.entity';
export declare class Client {
    id: number;
    firstName: string;
    lastName: string;
    cpf: string | null;
    rg: string;
    dateOfBirth: string | null;
    dateOfFirstVisit: string | null;
    notes: string | null;
    occupation: string | null;
    email: string | null;
    landlinePhone: string | null;
    mobilePhone: string | null;
    address: Address;
    howTheyFoundUs: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    beforeInsert(): void;
    beforeUpdate(): void;
    private formatarCampos;
}
