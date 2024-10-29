import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Employee } from "src/modules/employee/entities/employee.entity"
import { IJobPost } from "../job-post.interface"
import { Employer } from "src/modules/employer/entities/employer.entity"

@Entity({ name: "job_posts" })
export class JobPost extends BaseEntity implements IJobPost {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  salary: number

  @Column({ array: true, type: "text", default: [] })
  requirements: string[]

  @Column()
  employerId: number

  @ManyToOne(() => Employer, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employerId", referencedColumnName: "id" })
  employer: Employer
}
