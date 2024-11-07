import { Injectable, NotFoundException } from "@nestjs/common"
import { UpdateJobPostDto } from "./dto/update-jobPost"
import { CreateJobPostDto } from "./dto/create-jobPost"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { ApiError } from "./../../common/constants/errors"
import { JobPost } from "./entities/job-post.entity"

@Injectable()
export class JobPostService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  async getById(id: number) {
    return this.uowService.jobPostRepository.findOneBy({ id })
  }

  async getAll() {
    return this.uowService.jobPostRepository.find()
  }

  async create({
    description,
    requirements,
    salary,
    title,
    employerId,
  }: CreateJobPostDto) {
    const jobPost = new JobPost()

    jobPost.description = description
    jobPost.requirements = requirements
    jobPost.salary = salary
    jobPost.title = title
    jobPost.employerId = employerId

    return this.uowService.jobPostRepository.save(jobPost)
  }

  async update({
    id,
    description,
    requirements,
    salary,
    title,
  }: UpdateJobPostDto) {
    const jobPost = await this.uowService.jobPostRepository.findOneBy({ id })
    if (!jobPost) throw new NotFoundException(ApiError.JOB_POST_NOT_FOUND)

    jobPost.description = description
    jobPost.requirements = requirements
    jobPost.salary = salary
    jobPost.title = title

    return await this.uowService.jobPostRepository.save(jobPost)
  }

  async delete(id: number) {
    const jobPost = await this.uowService.jobPostRepository.findOneBy({ id })
    if (!jobPost) throw new NotFoundException(ApiError.JOB_POST_NOT_FOUND)

    await this.uowService.jobPostRepository.remove(jobPost)

    return jobPost
  }
}
