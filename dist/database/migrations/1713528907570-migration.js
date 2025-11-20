"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1713528907570 = void 0;
class Migration1713528907570 {
    name = 'Migration1713528907570';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "additionalDetails" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "additionalDetails" SET NOT NULL`);
    }
}
exports.Migration1713528907570 = Migration1713528907570;
//# sourceMappingURL=1713528907570-migration.js.map