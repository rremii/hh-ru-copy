import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Employee } from "src/modules/employee/entities/employee.entity"
import { IJobApplication } from "../job-application.interface"
import { JobPost } from "src/modules/job-post/entities/job-post.entity"

@Entity({ name: "job_applications" })
export class JobApplication extends BaseEntity implements IJobApplication {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  coverLetter: string

  @ManyToOne(() => JobPost, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "jobPostId", referencedColumnName: "id" })
  @Column()
  jobPostId: number

  @ManyToOne(() => Employee, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employeeId", referencedColumnName: "id" })
  @Column()
  employeeId: number
}
