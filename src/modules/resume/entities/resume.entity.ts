import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IResume } from "../resume.interface"
import { User } from "src/modules/user/entities/user.entity"
import { Employee } from "src/modules/employee/entities/employee.entity"

@Entity({ name: "resumes" })
export class Resume extends BaseEntity implements IResume {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  experience: string

  @Column({ array: true, type: "text", default: [] })
  skills: string[]

  @Column()
  education: string

  @OneToOne(() => Employee, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employeeId", referencedColumnName: "id" })
  @Column()
  employeeId: number
}
