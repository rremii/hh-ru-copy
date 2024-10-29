import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { User } from "./../../user/entities/user.entity"
import { IEmployer } from "../employer.interface"

@Entity({ name: "employers" })
export class Employer implements IEmployer {
  @PrimaryColumn()
  id: number

  @Column()
  about: string

  @OneToOne(() => User, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id", referencedColumnName: "id" })
  user: User
}
