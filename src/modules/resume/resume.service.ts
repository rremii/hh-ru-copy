import { Injectable } from "@nestjs/common"
import { CreateResumeDto } from "./dto/create-resume.dto"
import { UpdateResumeDto } from "./dto/update-resume.dto"

@Injectable()
export class ResumeService {
  async getById(id: number) {}

  async getAll() {}

  async create(createDto: CreateResumeDto) {}

  async update(updateDto: UpdateResumeDto) {}

  async delete(id: number) {}
}
