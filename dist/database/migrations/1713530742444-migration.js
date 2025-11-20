"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1713530742444 = void 0;
class Migration1713530742444 {
    name = 'Migration1713530742444';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "additionalDetails" TO "additional_details"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "howTheyFoundUs"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "first_name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "last_name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "how_they_found_us" character varying(255)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "how_they_found_us"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "howTheyFoundUs" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "lastName" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "firstName" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "additional_details" TO "additionalDetails"`);
    }
}
exports.Migration1713530742444 = Migration1713530742444;
//# sourceMappingURL=1713530742444-migration.js.map