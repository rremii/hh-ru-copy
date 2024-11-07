import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Employee } from "./../../employee/entities/employee.entity"
import { IJobApplication } from "../job-application.interface"
import { JobPost } from "./../../job-post/entities/job-post.entity"

@Entity({ name: "job_applications" })
export class JobApplication extends BaseEntity implements IJobApplication {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  coverLetter: string

  @Column()
  employeeId: number

  @Column()
  jobPostId: number

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date

  @ManyToOne(() => JobPost, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "jobPostId", referencedColumnName: "id" })
  jobPost: JobPost

  @ManyToOne(() => Employee, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employeeId", referencedColumnName: "id" })
  employee: Employee
}
