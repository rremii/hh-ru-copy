import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IResumeApplication } from "../resume-application.interface"
import { Resume } from "./../../resume/entities/resume.entity"
import { Employer } from "./../../employer/entities/employer.entity"

@Entity({ name: "resume_applications" })
export class ResumeApplication
  extends BaseEntity
  implements IResumeApplication
{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  coverLetter: string

  @Column()
  employerId: number

  @Column()
  resumeId: number

  @ManyToOne(() => Resume, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "resumeId", referencedColumnName: "id" })
  resume: Resume

  @ManyToOne(() => Employer, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employerId", referencedColumnName: "id" })
  employer: Employer
}
