import { Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { User } from "src/modules/user/entities/user.entity"
import { IEmployee } from "../employee.interface"

@Entity({ name: "employees" })
export class Employee implements IEmployee {
  @PrimaryColumn()
  id: number

  @OneToOne(() => User, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id", referencedColumnName: "id" })
  user: User
}
