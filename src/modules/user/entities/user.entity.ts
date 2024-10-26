import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IUser } from "../user.interface"

export enum UserRole {
  EMPLOYEE = "employee",
  EMPLOYER = "employer",
}

@Entity({ name: "users" })
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({ enum: UserRole })
  role: UserRole

  @Column({ nullable: true })
  refreshToken: string
}
