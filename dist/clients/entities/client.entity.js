"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const address_entity_1 = require("../../addresses/entities/address.entity");
const typeorm_1 = require("typeorm");
let Client = class Client {
    id;
    firstName;
    lastName;
    cpf;
    rg;
    dateOfBirth;
    dateOfFirstVisit;
    notes;
    occupation;
    email;
    landlinePhone;
    mobilePhone;
    address;
    howTheyFoundUs;
    createdAt;
    updatedAt;
    deletedAt;
    beforeInsert() {
        this.formatarCampos();
    }
    beforeUpdate() {
        this.formatarCampos();
    }
    formatarCampos() {
        if (this.firstName) {
            this.firstName = this.firstName.toUpperCase();
        }
        if (this.lastName) {
            this.lastName = this.lastName.toUpperCase();
        }
        if (this.occupation) {
            this.occupation = this.occupation.toUpperCase();
        }
    }
};
exports.Client = Client;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Client.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], Client.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "rg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'date_of_birth', nullable: true }),
    __metadata("design:type", Object)
], Client.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'date_of_first_visit', nullable: true }),
    __metadata("design:type", Object)
], Client.prototype, "dateOfFirstVisit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], Client.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], Client.prototype, "occupation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], Client.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'landline_phone',
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Client.prototype, "landlinePhone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'mobile_phone',
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Client.prototype, "mobilePhone", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.Address),
    (0, typeorm_1.JoinColumn)({ name: 'address_id' }),
    __metadata("design:type", address_entity_1.Address)
], Client.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'how_they_found_us',
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Client.prototype, "howTheyFoundUs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Client.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Client.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Client.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Client.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Client.prototype, "beforeUpdate", null);
exports.Client = Client = __decorate([
    (0, typeorm_1.Entity)({ name: 'clients' })
], Client);
//# sourceMappingURL=client.entity.js.map