import { Exclude } from "class-transformer";

import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "../../addresses/entities/address.entity";
import { User } from "src/users/entities/user.entity";

@Entity({ name: "clients" })
@Unique(["cpf"])
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "first_name", type: "varchar", length: 255 })
  firstName: string;

  @Column({ name: "last_name", type: "varchar", length: 255 })
  lastName: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  cpf: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  rg: string;

  @Column({ type: "date", name: "date_of_birth", nullable: true })
  dateOfBirth: string | null;

  @Column({ type: "date", name: "date_of_first_visit", nullable: true })
  dateOfFirstVisit: string | null;

  @Column({ type: "text", nullable: true })
  notes: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  occupation: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  email: string | null;

  @Column({
    name: "landline_phone",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  landlinePhone: string | null;

  @Column({
    name: "mobile_phone",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  mobilePhone: string | null;

  @OneToOne(() => Address, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: "address_id" })
  address: Address | null;

  @Column({
    name: "how_they_found_us",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  howTheyFoundUs: string | null;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamptz" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamptz" })
  @Exclude()
  deletedAt: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: "created_by" })
  createdBy: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: "deleted_by" })
  deletedBy: User | null;

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
