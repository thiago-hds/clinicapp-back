import { Module } from "@nestjs/common";
import { ClientsService } from "./clients.service";
import { ClientsController } from "./clients.controller";
import { Client } from "./entities/client.entity";
import { getDataSourceToken, getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "src/addresses/entities/address.entity";
import { DataSource } from "typeorm";
import { customClientsRepository } from "./clients.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Client, Address])],
  controllers: [ClientsController],
  providers: [
    {
      provide: getRepositoryToken(Client),
      inject: [getDataSourceToken()],
      useFactory: (dataSource: DataSource) => {
        return dataSource.getRepository(Client).extend(customClientsRepository);
      },
    },
    ClientsService,
  ],
})
export class ClientsModule {}
