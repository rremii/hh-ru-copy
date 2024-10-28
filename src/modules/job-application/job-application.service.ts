import { Injectable } from "@nestjs/common"
import { CreateJobApplicationDto } from "./dto/create-jobApplication.dto"
import { JobApplication } from "./entities/job-application.entity"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"

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
}
