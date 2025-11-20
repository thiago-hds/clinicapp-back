import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { FindClientDto } from './dto/find-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): string;
    findAll(query: FindClientDto): Promise<import("../common/dto/paginated-response").PaginatedResponseDto<import("./entities/client.entity").Client>>;
    findOne(id: number): string;
    update(id: string, updateClientDto: UpdateClientDto): string;
    remove(id: string): string;
}
