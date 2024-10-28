import { Injectable } from "@nestjs/common"
import { ResumeApplication } from "./entities/resume-application.entity"
import { CreateResumeApplicationDto } from "./dto/create-resumeApplication.dto"

@Injectable()
export class ResumeApplicationService {
  create(createDto: CreateResumeApplicationDto): Promise<ResumeApplication> {}

  getAllByEmployerId(): Promise<ResumeApplication[]> {}

  getAllByEmployeeId(): Promise<ResumeApplication[]> {}
}
