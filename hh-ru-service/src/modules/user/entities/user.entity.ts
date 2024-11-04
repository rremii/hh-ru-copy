import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { IUser, UserRole } from "../user.interface"

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
