import { Injectable } from "@nestjs/common"
import { ResumeApplication } from "./entities/resume-application.entity"
import { CreateResumeApplicationDto } from "./dto/create-resumeApplication.dto"

@Injectable()
export class ResumeApplicationService {
  async create(createDto: CreateResumeApplicationDto) {}

  async getAllByEmployerId() {}

  async getAllByEmployeeId() {}
}
