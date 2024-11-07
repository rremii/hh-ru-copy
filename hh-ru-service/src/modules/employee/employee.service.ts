import { JobApplication } from "src/modules/job-application/entities/job-application.entity"
import { ResumeService } from "./../resume/resume.service"
import { Injectable, NotFoundException } from "@nestjs/common"
import { Employee } from "./entities/employee.entity"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { CreateEmployeeDto } from "./dto/create-employee.dto"
import { UpdateEmployeeDto } from "./dto/update-employee.dto"
import { CreateEmployerReviewDto } from "../employer-review/dto/create-employerReview.dto"
import { CreateJobApplicationDto } from "../job-application/dto/create-jobApplication.dto"
import { UpdateResumeDto } from "../resume/dto/update-resume.dto"
import { CreateResumeDto } from "../resume/dto/create-resume.dto"
import { UserService } from "../user/user.service"
import { JobApplicationService } from "../job-application/job-application.service"
import { EmployerReviewService } from "../employer-review/employer-review.service"
import { ApiError } from "./../../common/constants/errors"
import { EmployeeDto } from "./dto/employee.dto"
import { JobPostService } from "../job-post/job-post.service"

@Injectable()
export class EmployeeService {
  constructor(
    private readonly uowService: UnitOfWorkService,
    private readonly userService: UserService,
    private readonly resumeService: ResumeService,
    private readonly jobApplicationService: JobApplicationService,
    private readonly employerReviewService: EmployerReviewService,
    private readonly jobPostService: JobPostService,
  ) {}

  async getMe(userId: number): Promise<EmployeeDto> {
    const employee = await this.uowService.employeeRepository.findOne({
      where: { user: { id: userId } },
      relations: { user: true },
      select: {
        user: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    })
    const user = employee.user
    if (!employee || !user)
      throw new NotFoundException(ApiError.EMPLOYEE_NOT_FOUND)

    return {
      email: user.email,
      name: user.name,
      role: user.role,
      id: employee.id,
    }
  }

  async create({ id }: CreateEmployeeDto): Promise<Employee> {
    const employee = new Employee()
    employee.id = id

    return this.uowService.employeeRepository.save(employee)
  }

  async update({ id, name }: UpdateEmployeeDto) {
    return await this.userService.update({ id, name })
  }

  async getResume(employeeId: number) {
    return this.uowService.resumeRepository.findOneBy({ employeeId })
  }

  async createResume(createDto: CreateResumeDto) {
    return this.resumeService.create(createDto)
  }

  async updateResume(updateDto: UpdateResumeDto) {
    return this.resumeService.update(updateDto)
  }

  async deleteResume(employeeId: number) {
    return this.resumeService.delete(employeeId)
  }

  async getResumeApplications(employeeId: number) {
    const resume = await this.uowService.resumeRepository.findOneBy({
      employeeId,
    })
    if (!resume) return []

    return this.uowService.resumeApplicationRepository.find({
      where: { resumeId: resume.id },
    })
  }

  async createJobApplication(createDto: CreateJobApplicationDto) {
    return this.jobApplicationService.create(createDto)
  }
  async deleteJobApplication(id: number) {
    return this.jobApplicationService.delete(id)
  }

  async getJobApplications(employeeId: number) {
    return this.uowService.jobApplicationRepository.find({
      where: { employeeId },
    })
  }

  async createEmployerReview(createDto: CreateEmployerReviewDto) {
    return this.employerReviewService.create(createDto)
  }

  async getEmployerReviewsByEmployee(employeeId: number) {
    return this.uowService.employerReviewRepository.find({
      where: { employeeId },
    })
  }

  async getEmployerReviewsByEmployer(employerId: number) {
    return this.uowService.employerReviewRepository.find({
      where: { employerId },
    })
  }

  async getResumeById(id: number) {
    return this.resumeService.getById(id)
  }

  async getPostJobById(id: number, employeeId: number) {
    const jobApplications = await this.jobApplicationService.getByJobPostId(id)

    const isApplied = jobApplications.some(
      (jobApplication) => jobApplication.employeeId === employeeId,
    )

    const jobPost = await this.jobPostService.getById(id)

    return {
      ...jobPost,
      isApplied,
    }
  }

  async getResumes() {
    return this.resumeService.getAll()
  }
}
