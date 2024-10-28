import { Injectable } from "@nestjs/common"
import { ResumeApplication } from "./entities/resume-application.entity"
import { CreateResumeApplicationDto } from "./dto/create-resumeApplication.dto"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"

@Injectable()
export class ResumeApplicationService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  async create({
    coverLetter,
    employerId,
    resumeId,
  }: CreateResumeApplicationDto) {
    const resumeApplication = new ResumeApplication()

    resumeApplication.coverLetter = coverLetter
    resumeApplication.employerId = employerId
    resumeApplication.resumeId = resumeId

    return this.uowService.resumeApplicationRepository.save(resumeApplication)
  }

  async getAllByEmployerId() {}

  async getAllByEmployeeId() {}
}
