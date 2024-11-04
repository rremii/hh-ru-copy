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

@Injectable()
export class EmployerService {
  constructor(
    private readonly uowService: UnitOfWorkService,
    private readonly jobPostService: JobPostService,
    private readonly resumeApplicationService: ResumeApplicationService,
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
    })
  }

  async deleteJobPost(id: number) {
    return this.jobPostService.delete(id)
  }

  async createResumeApplication(createDto: CreateResumeApplicationDto) {
    return this.resumeApplicationService.create(createDto)
  }

  async getResumeApplications(employerId: number) {
    return this.uowService.resumeApplicationRepository.find({
      where: { employerId },
    })
  }

  async getEmployerReviews(employerId: number) {
    return this.uowService.employerReviewRepository.find({
      where: { employerId },
    })
  }

  async getById(id: number) {
    return this.uowService.employerRepository.findOneBy({ id })
  }

  async getPostJobById(id: number) {
    return this.jobPostService.getById(id)
  }

  async getPostJobs() {
    return this.jobPostService.getAll()
  }
}
