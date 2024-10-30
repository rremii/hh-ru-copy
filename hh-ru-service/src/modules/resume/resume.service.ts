import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateResumeDto } from "./dto/create-resume.dto"
import { UpdateResumeDto } from "./dto/update-resume.dto"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { Resume } from "./entities/resume.entity"
import { ApiError } from "./../../common/constants/errors"

@Injectable()
export class ResumeService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  async getById(id: number) {
    return this.uowService.resumeRepository.findOneBy({ id })
  }

  async getAll() {
    return this.uowService.resumeRepository.find()
  }

  async create(createDto: CreateResumeDto) {
    const resume = new Resume()
    resume.employeeId = createDto.employeeId
    resume.title = createDto.title
    resume.education = createDto.education
    resume.experience = createDto.experience
    resume.skills = createDto.skills

    return this.uowService.resumeRepository.save(resume)
  }

  async update({ id, education, experience, skills, title }: UpdateResumeDto) {
    const resume = await this.uowService.resumeRepository.findOneBy({
      id,
    })
    if (!resume) throw new NotFoundException(ApiError.RESUME_NOT_FOUND)

    if (title) resume.title = title
    if (education) resume.education = education
    if (experience) resume.experience = experience
    if (skills) resume.skills = skills

    return this.uowService.resumeRepository.save(resume)
  }

  async delete(id: number) {
    const resume = await this.uowService.resumeRepository.findOneBy({ id })
    if (!resume) throw new NotFoundException(ApiError.RESUME_NOT_FOUND)

    await this.uowService.resumeRepository.remove(resume)

    return resume
  }
}
