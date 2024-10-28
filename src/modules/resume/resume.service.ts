import { Injectable } from "@nestjs/common"
import { CreateResumeDto } from "./dto/create-resume.dto"
import { UpdateResumeDto } from "./dto/update-resume.dto"

@Injectable()
export class ResumeService {
  getById(id: number) {}

  getAll() {}

  create(createDto: CreateResumeDto) {}

  update(updateDto: UpdateResumeDto) {}

  delete(id: number) {}
}
