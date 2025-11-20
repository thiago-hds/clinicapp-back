import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { FindClientDto } from './dto/find-client.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  async findAll(findClienteDto: FindClientDto) {
    const { page, limit, skip } = findClienteDto;

    const [items, total] = await this.clientsRepository.findAndCount({
      skip,
      take: limit,
    });

    return new PaginatedResponseDto(items, total, page, limit);
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
