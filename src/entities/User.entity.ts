import {
	BeforeInsert,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		name: 'first_name',
		type: 'varchar',
		length: 255,
		nullable: false,
	})
	firstName: string;

	@Column({ name: 'last_name', type: 'varchar', length: 255 })
	lastName: string;

	@Column({ type: 'varchar', length: 255, nullable: false })
	email: string | null;

	@Column({ type: 'varchar', length: 255, nullable: false })
	password: string | null;

	@CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
	updatedAt: Date;

	@DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
	deletedAt: Date;

	@BeforeInsert()
	beforeInsert() {
		if (this.firstName) {
			this.firstName = this.firstName.toUpperCase();
		}
		if (this.lastName) {
			this.lastName = this.lastName.toUpperCase();
		}
	}
}
