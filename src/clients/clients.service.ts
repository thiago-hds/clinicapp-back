import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "./entities/client.entity";
import { Repository } from "typeorm";
import { FindClientDto } from "./dto/find-client.dto";
import { PaginatedResponseDto } from "src/common/dto/paginated-response";
import { Address } from "src/addresses/entities/address.entity";
import type { ClientsRepository } from "./clients.repository";

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientsRepository: ClientsRepository,
    @InjectRepository(Address)
    private readonly addressesRepository: Repository<Address>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const documentExists = await this.clientsRepository.existsByCpf(createClientDto.cpf);
    if (documentExists) {
      return new HttpException("CPF already exists", HttpStatus.BAD_REQUEST);
    }

    const address = this.addressesRepository.create(createClientDto.address);
    const client = this.clientsRepository.create({
      ...createClientDto,
      address,
    });

    return await this.clientsRepository.save(client);
  }

  async findAll(findClienteDto: FindClientDto) {
    const { page, limit, skip } = findClienteDto;

    const [items, total] = await this.clientsRepository.findAndCount({
      skip,
      take: limit,
    });

    return new PaginatedResponseDto(items, total, page, limit);
  }

  async findOne(id: number) {
    const client = await this.clientsRepository.findOne({
      where: { id },
      relations: {
        address: true,
      },
    });
    if (!client) {
      throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    return client;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
