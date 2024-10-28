import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateEmployerDto } from "./dto/create-employer.dto"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { Employer } from "./entities/employer.entity"
import { UpdateEmployerDto } from "./dto/update-employer.dto"
import { CreateJobPostDto } from "../job-post/dto/create-jobPost"
import { UpdateJobPostDto } from "../job-post/dto/update-jobPost"
import { CreateResumeApplicationDto } from "../resume-application/dto/create-resumeApplication.dto"
import { ApiError } from "src/common/constants/errors"
import { JobPostService } from "../job-post/job-post.service"
import { ResumeApplicationService } from "../resume-application/resume-application.service"

@Injectable()
export class EmployerService {
  constructor(
    private readonly uowService: UnitOfWorkService,
    private readonly jobPostService: JobPostService,
    private readonly resumeApplicationService: ResumeApplicationService,
  ) {}

  async create({ about, id }: CreateEmployerDto): Promise<Employer> {
    const employer = new Employer()
    employer.id = id
    employer.about = about

    return this.uowService.employerRepository.save(employer)
  }

  async update({ id, about, name }: UpdateEmployerDto) {
    const employer = await this.uowService.employerRepository.findOneBy({ id })
    const user = await this.uowService.userRepository.findOneBy({ id })
    if (!employer || !user)
      throw new NotFoundException(ApiError.EMPLOYER_NOT_FOUND)

    if (about) employer.about = about
    if (name) user.name = name

    this.uowService.makeTransactional(async () => {
      await this.uowService.employerRepository.save(employer)
      await this.uowService.userRepository.save(user)
    })
  }

  async getJobPosts(employerId: number) {
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
}
