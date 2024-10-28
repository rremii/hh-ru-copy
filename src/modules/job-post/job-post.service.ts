import { Injectable } from "@nestjs/common"
import { UpdateJobPostDto } from "./dto/update-jobPost"
import { CreateJobPostDto } from "./dto/create-jobPost"

@Injectable()
export class JobPostService {
  getById(id: number) {}

  getAll() {}

  create(createDto: CreateJobPostDto) {}

  update(updateDto: UpdateJobPostDto) {}

  delete(id: number) {}
}
