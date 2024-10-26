import { Injectable, Scope } from "@nestjs/common"
import { Employee } from "src/modules/employee/entities/employee.entity"
import { Employer } from "src/modules/employer/entities/employer.entity"
import { User } from "src/modules/user/entities/user.entity"
import { DataSource, EntityManager } from "typeorm"
import { Resume } from "../resume/entities/resume.entity"
import { ResumeApplication } from "../resume-application/entities/resume-application.entity"
import { EmployerReview } from "../employer-review/entities/employer-review.entity"
import { JobPost } from "../job-post/entities/job-post.entity"
import { JobApplication } from "../job-application/entities/job-application.entity"

@Injectable({
  scope: Scope.REQUEST,
})
export class UnitOfWorkService {
  constructor(private readonly dataSource: DataSource) {}

  private _manager: EntityManager | null = null

  async makeTransactional<T>(fn: (ds: DataSource) => T): Promise<T> {
    const queryRunner = this.dataSource.createQueryRunner()

    await queryRunner.connect()
    await queryRunner.startTransaction()

    this._manager = queryRunner.manager
    try {
      const res = await fn(this.dataSource)

      await queryRunner.commitTransaction()

      return res
    } catch (err) {
      await queryRunner.rollbackTransaction()

      throw err
    } finally {
      await queryRunner.release()
    }
  }

  get userRepository() {
    if (this._manager) return this._manager.getRepository(User)
    return this.dataSource.getRepository(User)
  }

  get employeeRepository() {
    if (this._manager) return this._manager.getRepository(Employee)
    return this.dataSource.getRepository(Employee)
  }

  get employerRepository() {
    if (this._manager) return this._manager.getRepository(Employer)
    return this.dataSource.getRepository(Employer)
  }

  get resumeRepository() {
    if (this._manager) return this._manager.getRepository(Resume)
    return this.dataSource.getRepository(Resume)
  }

  get resumeApplicationRepository() {
    if (this._manager) return this._manager.getRepository(ResumeApplication)
    return this.dataSource.getRepository(ResumeApplication)
  }

  get employerReviewRepository() {
    if (this._manager) return this._manager.getRepository(EmployerReview)
    return this.dataSource.getRepository(EmployerReview)
  }

  get jobPostRepository() {
    if (this._manager) return this._manager.getRepository(JobPost)
    return this.dataSource.getRepository(JobPost)
  }

  get jobApplicationRepository() {
    if (this._manager) return this._manager.getRepository(JobApplication)
    return this.dataSource.getRepository(JobApplication)
  }
}
