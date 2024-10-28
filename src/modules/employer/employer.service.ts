import { Injectable } from "@nestjs/common"
import { CreateEmployerDto } from "./dto/create-employer.dto"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { Employer } from "./entities/employer.entity"
import { UpdateEmployerDto } from "./dto/update-employer.dto"
import { CreateJobPostDto } from "../job-post/dto/create-jobPost"
import { UpdateJobPostDto } from "../job-post/dto/update-jobPost"
import { CreateResumeApplicationDto } from "../resume-application/dto/create-resumeApplication.dto"

@Injectable()
export class EmployerService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  create({ about, id }: CreateEmployerDto): Promise<Employer> {
    const employer = new Employer()
    employer.id = id
    employer.about = about

    return this.uowService.employerRepository.save(employer)
  }

  update(updateDto: UpdateEmployerDto) {}

  getJobPosts(employerId: number) {}

  createJobPost(createDto: CreateJobPostDto) {}

  updateJobPost(updateDto: UpdateJobPostDto) {}

  deleteJobPost(id: number) {}

  getJobApplications(employerId: number, jobPostId: number) {}

  createResumeApplication(createDto: CreateResumeApplicationDto) {}

  getResumeApplications(employerId: number) {}

  getEmployerReviews(employerId: number) {}
}
