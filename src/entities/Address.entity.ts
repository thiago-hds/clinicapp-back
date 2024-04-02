import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'adresses' })
export class Address {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 255 })
	zipcode: string;

	@Column({ type: 'varchar', length: 255 })
	streetName: string;

	@Column({ type: 'varchar', length: 255 })
	district: string;

	@Column({ type: 'varchar', length: 255 })
	city: string;

	@Column({ type: 'varchar', length: 255 })
	state: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
	updatedAt: Date;

	@DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
	deletedAt: Date;
}
