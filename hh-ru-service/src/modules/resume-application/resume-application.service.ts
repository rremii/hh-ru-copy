import { Injectable, NotFoundException } from "@nestjs/common"
import { ResumeApplication } from "./entities/resume-application.entity"
import { CreateResumeApplicationDto } from "./dto/create-resumeApplication.dto"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { ApiError } from "src/common/constants/errors"

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

  async delete(id: number) {
    const resumeApplication =
      await this.uowService.resumeApplicationRepository.findOneBy({ id })
    if (!resumeApplication)
      throw new NotFoundException(ApiError.RESUME_APPLICATION_NOT_FOUND)

    await this.uowService.resumeApplicationRepository.remove(resumeApplication)

    return resumeApplication
  }
}
