import { ResumeApplication } from "./../resume-application/entities/resume-application.entity"
import { ResumeService } from "./../resume/resume.service"
import { EmployerReviewService } from "./../employer-review/employer-review.service"
import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateEmployerDto } from "./dto/create-employer.dto"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { Employer } from "./entities/employer.entity"
import { UpdateEmployerDto } from "./dto/update-employer.dto"
import { CreateJobPostDto } from "../job-post/dto/create-jobPost"
import { UpdateJobPostDto } from "../job-post/dto/update-jobPost"
import { CreateResumeApplicationDto } from "../resume-application/dto/create-resumeApplication.dto"
import { ApiError } from "./../../common/constants/errors"
import { JobPostService } from "../job-post/job-post.service"
import { ResumeApplicationService } from "../resume-application/resume-application.service"
import { EmployerDto } from "./dto/employer.dto"
import { CreateEmployerReviewDto } from "../employer-review/dto/create-employerReview.dto"
import { EmployeeService } from "../employee/employee.service"

@Injectable()
export class EmployerService {
  constructor(
    private readonly uowService: UnitOfWorkService,
    private readonly jobPostService: JobPostService,
    private readonly resumeApplicationService: ResumeApplicationService,
    private readonly employerReviewService: EmployerReviewService,
    private readonly resumeService: ResumeService,
  ) {}

  async getMe(userId: number): Promise<EmployerDto> {
    const employer = await this.uowService.employerRepository.findOne({
      where: { user: { id: userId } },
      relations: { user: true },
    })

    const user = employer.user
    if (!employer || !user)
      throw new NotFoundException(ApiError.EMPLOYER_NOT_FOUND)

    return {
      email: user.email,
      name: user.name,
      role: user.role,
      id: employer.id,
      about: employer.about,
    }
  }

  async create({ about, id }: CreateEmployerDto): Promise<Employer> {
    const employer = new Employer()
    employer.id = id
    employer.about = about

    return this.uowService.employerRepository.save(employer)
  }

  async update({ id, about, name }: UpdateEmployerDto) {
    const employer = await this.uowService.employerRepository.findOne({
      where: { id },
      relations: { user: true },
    })
    const user = employer.user
    if (!employer || !user)
      throw new NotFoundException(ApiError.EMPLOYER_NOT_FOUND)

    if (about) employer.about = about
    if (name) user.name = name

    return this.uowService.makeTransactional(async () => {
      await this.uowService.userRepository.save(user)
      return await this.uowService.employerRepository.save(employer)
    })
  }

  async getJobPostsByEmployerId(employerId: number) {
    return this.uowService.jobPostRepository.find({
      where: { employerId },
      order: {
        created_at: "DESC",
      },
    })
  }

  async createJobPost(createDto: CreateJobPostDto) {
    return this.jobPostService.create(createDto)
  }

  async updateJobPost(updateDto: UpdateJobPostDto) {
    return this.jobPostService.update(updateDto)
  }

  async getJobApplications(jobPostId: number) {
    return this.uowService.jobApplicationRepository.find({
      where: { jobPostId },
      select: {
        employee: {
          resume: {
            id: true,
          },
        },
      },
      relations: {
        employee: {
          resume: true,
        },
      },
    })
  }

  async deleteJobPost(id: number) {
    return this.jobPostService.delete(id)
  }

  async deleteResumeApplication(id: number) {
    return this.resumeApplicationService.delete(id)
  }
  async createResumeApplication(createDto: CreateResumeApplicationDto) {
    return this.resumeApplicationService.create(createDto)
  }

  async getResumeApplications(employerId: number) {
    return this.uowService.resumeApplicationRepository.find({
      where: { employerId },
    })
  }

  async getResumeById(id: number, employerId: number) {
    const resume = await this.resumeService.getById(id)
    if (!resume) throw new NotFoundException(ApiError.RESUME_NOT_FOUND)

    const resumeApplications =
      await this.uowService.resumeApplicationRepository.find({
        where: { employerId },
      })

    const isApplied = resumeApplications.some(
      (resumeApplication) => resumeApplication.resumeId === id,
    )

    return { ...resume, isApplied }
  }

  async getEmployerReviews(employerId: number) {
    return this.uowService.employerReviewRepository.find({
      where: { employerId },
      order: { created_at: "DESC" },
    })
  }

  async getById(id: number) {
    const user = await this.uowService.userRepository.findOneBy({ id })
    if (!user) throw new NotFoundException(ApiError.EMPLOYER_NOT_FOUND)

    const employer = await this.uowService.employerRepository.findOneBy({ id })
    if (!employer) throw new NotFoundException(ApiError.EMPLOYER_NOT_FOUND)

    return {
      ...user,
      ...employer,
    }
  }

  async getPostJobById(id: number) {
    return this.jobPostService.getById(id)
  }

  async getPostJobs() {
    return this.jobPostService.getAll()
  }

  async createEmployerReview(createDto: CreateEmployerReviewDto) {
    return this.employerReviewService.create(createDto)
  }
}
