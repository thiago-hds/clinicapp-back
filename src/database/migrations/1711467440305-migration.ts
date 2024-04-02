import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1711467440305 implements MigrationInterface {
    name = 'Migration1711467440305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "zipcode" character varying(30) NOT NULL, "streetName" character varying(255) NOT NULL, "district" character varying(255) NOT NULL, "city" character varying(255) NOT NULL, "state" character varying(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "deleted_at" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "address_id" integer`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_10988406220d6ff391e315ba265" UNIQUE ("address_id")`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_10988406220d6ff391e315ba265" FOREIGN KEY ("address_id") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_10988406220d6ff391e315ba265"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_10988406220d6ff391e315ba265"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "address_id"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
    }

}
