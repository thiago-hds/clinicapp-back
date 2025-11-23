import { Repository } from "typeorm";
import { Client } from "./entities/client.entity";

export interface ClientsRepository extends Repository<Client> {
  this: Repository<Client>;
  existsByCpf(cpf: string): Promise<boolean>;
}

export const customClientsRepository: Pick<ClientsRepository, any> = {
  async existsByCpf(this: Repository<Client>, cpf: string): Promise<boolean> {
    const count = await this.createQueryBuilder("c").where("c.cpf = :cpf", { cpf }).getCount();
    return count > 0;
  },
};
