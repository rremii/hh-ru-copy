import { Injectable } from "@nestjs/common"
import { UpdateJobPostDto } from "./dto/update-jobPost"
import { CreateJobPostDto } from "./dto/create-jobPost"

@Injectable()
export class JobPostService {
  async getById(id: number) {}

  async getAll() {}

  async create(createDto: CreateJobPostDto) {}

  async update(updateDto: UpdateJobPostDto) {}

  async delete(id: number) {}
}
