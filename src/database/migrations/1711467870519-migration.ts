import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1711467870519 implements MigrationInterface {
    name = 'Migration1711467870519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "landline_phone" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "mobile_phone" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "mobile_phone"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "landline_phone"`);
    }

}
