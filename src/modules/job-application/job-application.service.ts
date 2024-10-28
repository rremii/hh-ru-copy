import { Injectable } from "@nestjs/common"
import { CreateJobApplicationDto } from "./dto/create-jobApplication.dto"
import { JobApplication } from "./entities/job-application.entity"

@Injectable()
export class JobApplicationService {
  async create(createDto: CreateJobApplicationDto) {}

  async getAll() {}
}
