import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Address } from './Address.entity';

@Entity({ name: 'clients' })
export class Client {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'first_name', type: 'varchar', length: 255 })
	firstName: string;

	@Column({ name: 'last_name', type: 'varchar', length: 255 })
	lastName: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	cpf: string | null;

	@Column({ type: 'varchar', length: 255, nullable: true })
	rg: string;

	@Column({ type: 'date', name: 'date_of_birth', nullable: true })
	dateOfBirth: Date | null;

	@Column({ type: 'date', name: 'date_of_first_visit', nullable: true })
	dateOfFirstVisit: Date | null;

	@Column({ type: 'text', nullable: true })
	notes: string | null;

	@Column({ type: 'varchar', length: 255, nullable: true })
	occupation: string | null;

	@Column({ type: 'varchar', length: 255, nullable: true })
	email: string | null;

	@Column({
		name: 'landline_phone',
		type: 'varchar',
		length: 255,
		nullable: true,
	})
	landlinePhone: string | null;

	@Column({
		name: 'mobile_phone',
		type: 'varchar',
		length: 255,
		nullable: true,
	})
	mobilePhone: string | null;

	@OneToOne(() => Address)
	@JoinColumn({ name: 'address_id' })
	address: Address;

	@Column({
		name: 'how_they_found_us',
		type: 'varchar',
		length: 255,
		nullable: true,
	})
	howTheyFoundUs: string | null;

	@CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
	updatedAt: Date;

	@DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
	deletedAt: Date;

	@BeforeInsert()
	beforeInsert() {
		this.formatarCampos();
	}

	@BeforeUpdate()
	beforeUpdate() {
		this.formatarCampos();
	}

	private formatarCampos() {
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
}
