import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1713528907570 implements MigrationInterface {
    name = 'Migration1713528907570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "additionalDetails" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "additionalDetails" SET NOT NULL`);
    }

}
