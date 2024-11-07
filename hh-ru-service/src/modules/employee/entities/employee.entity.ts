import { Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { User } from "./../../user/entities/user.entity"
import { IEmployee } from "../employee.interface"
import { Resume } from "src/modules/resume/entities/resume.entity"

@Entity({ name: "employees" })
export class Employee implements IEmployee {
  @PrimaryColumn()
  id: number

  @OneToOne(() => User, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id", referencedColumnName: "id" })
  user: User

  @OneToOne(() => Resume, (resume) => resume.employee)
  resume: Resume
}
