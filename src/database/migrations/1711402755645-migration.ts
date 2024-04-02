import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1711402755645 implements MigrationInterface {
    name = 'Migration1711402755645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "cpf" character varying(255), "rg" character varying(255), "date_of_birth" date, "date_of_first_visit" date, "notes" text, "occupation" character varying(255), "email" character varying(255), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}