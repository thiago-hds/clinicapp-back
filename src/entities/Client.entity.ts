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

	@Column({ type: 'varchar', length: 255 })
	name: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	cpf: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	rg: string;

	@Column({ type: 'date', name: 'date_of_birth', nullable: true })
	dateOfBirth: Date | null;

	@Column({ type: 'date', name: 'date_of_first_visit', nullable: true })
	dateOfFirstVisit: Date | null;

	@Column({ type: 'text', nullable: true })
	notes: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	occupation: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	email: string;

	@Column({
		name: 'landline_phone',
		type: 'varchar',
		length: 255,
		nullable: true,
	})
	landlinePhone: string;

	@Column({
		name: 'mobile_phone',
		type: 'varchar',
		length: 255,
		nullable: true,
	})
	mobilePhone: string;

	@OneToOne(() => Address)
	@JoinColumn({ name: 'address_id' })
	address: Address;

	@CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
	updatedAt: Date;

	@DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
	deletedAt: Date;
}
