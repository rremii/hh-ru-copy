import { Injectable } from "@nestjs/common"
import { CreateEmployerReviewDto } from "./dto/create-employerReview.dto"
import { EmployerReview } from "./entities/employer-review.entity"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"

@Injectable()
export class EmployerReviewService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  async create({ comment, employeeId, employerId }: CreateEmployerReviewDto) {
    const employerReview = new EmployerReview()
    employerReview.comment = comment
    employerReview.employeeId = employeeId
    employerReview.employerId = employerId

    return this.uowService.employerReviewRepository.save(employerReview)
  }

  async getAll() {}
}
