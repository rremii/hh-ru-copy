import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Employee } from "./../../employee/entities/employee.entity"
import { IEmployerReview } from "../employer-review.interface"
import { Employer } from "./../../employer/entities/employer.entity"

@Entity({ name: "employer_reviews" })
export class EmployerReview extends BaseEntity implements IEmployerReview {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  comment: string

  @Column()
  employerId: number

  @Column()
  employeeId: number

  @ManyToOne(() => Employer, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employerId", referencedColumnName: "id" })
  employer: Employer

  @ManyToOne(() => Employee, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employeeId", referencedColumnName: "id" })
  employee: Employee
}
