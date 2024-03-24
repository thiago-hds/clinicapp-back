import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';

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
	dateOfBirth: Date;

	@Column({ type: 'date', name: 'date_of_first_visit', nullable: true })
	dateOfFirstVisit: Date;

	@Column({ type: 'text', nullable: true })
	notes: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	occupation: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	email: string;

	@BeforeInsert()
	@BeforeUpdate()
	async validate() {
		// await validateOrReject(this);
	}
}
