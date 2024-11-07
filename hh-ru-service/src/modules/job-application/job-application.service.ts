import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateJobApplicationDto } from "./dto/create-jobApplication.dto"
import { JobApplication } from "./entities/job-application.entity"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { ApiError } from "src/common/constants/errors"

@Injectable()
export class JobApplicationService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  async create({
    coverLetter,
    employeeId,
    jobPostId,
  }: CreateJobApplicationDto) {
    const jobApplication = new JobApplication()

    jobApplication.coverLetter = coverLetter
    jobApplication.employeeId = employeeId
    jobApplication.jobPostId = jobPostId

    return this.uowService.jobApplicationRepository.save(jobApplication)
  }

  async getByJobPostId(jobPostId) {
    return this.uowService.jobApplicationRepository.find({
      where: { jobPostId },
    })
  }

  async delete(id: number) {
    const jobApplication =
      await this.uowService.jobApplicationRepository.findOneBy({ id })
    if (!jobApplication)
      throw new NotFoundException(ApiError.JOB_APPLICATION_NOT_FOUND)

    await this.uowService.jobApplicationRepository.remove(jobApplication)

    return jobApplication
  }
}
