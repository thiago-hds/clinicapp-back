import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1713528002510 implements MigrationInterface {
    name = 'Migration1713528002510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "zipcode" character varying(255) NOT NULL, "streetName" character varying(255) NOT NULL, "district" character varying(255) NOT NULL, "city" character varying(255) NOT NULL, "state" character varying(255) NOT NULL, "number" character varying(255) NOT NULL, "additionalDetails" character varying(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "firstName" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "cpf" character varying(255), "rg" character varying(255), "date_of_birth" date, "date_of_first_visit" date, "notes" text, "occupation" character varying(255), "email" character varying(255), "landline_phone" character varying(255), "mobile_phone" character varying(255), "howTheyFoundUs" character varying(255), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "address_id" integer, CONSTRAINT "REL_10988406220d6ff391e315ba26" UNIQUE ("address_id"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_10988406220d6ff391e315ba265" FOREIGN KEY ("address_id") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_10988406220d6ff391e315ba265"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
    }

}
