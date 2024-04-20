import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1713530742444 implements MigrationInterface {
    name = 'Migration1713530742444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "additionalDetails" TO "additional_details"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "howTheyFoundUs"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "first_name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "last_name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "how_they_found_us" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "how_they_found_us"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "howTheyFoundUs" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "lastName" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "firstName" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "additional_details" TO "additionalDetails"`);
    }

}
