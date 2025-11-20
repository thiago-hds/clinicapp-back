import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { FindClientDto } from './dto/find-client.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response';
export declare class ClientsService {
    private clientsRepository;
    constructor(clientsRepository: Repository<Client>);
    create(createClientDto: CreateClientDto): string;
    findAll(findClienteDto: FindClientDto): Promise<PaginatedResponseDto<Client>>;
    findOne(id: number): string;
    update(id: number, updateClientDto: UpdateClientDto): string;
    remove(id: number): string;
}
