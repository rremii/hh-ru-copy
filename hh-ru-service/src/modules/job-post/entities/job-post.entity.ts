import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IJobPost } from "../job-post.interface"
import { Employer } from "./../../employer/entities/employer.entity"

@Entity({ name: "job_posts" })
export class JobPost extends BaseEntity implements IJobPost {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column({ type: "money" })
  salary: number | string

  @Column({ array: true, type: "text", default: [] })
  requirements: string[]

  @Column()
  employerId: number

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date

  @ManyToOne(() => Employer, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employerId", referencedColumnName: "id" })
  employer: Employer
}
