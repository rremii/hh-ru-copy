import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateEmployerReviewDto } from "./dto/create-employerReview.dto"
import { EmployerReview } from "./entities/employer-review.entity"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { ApiError } from "src/common/constants/errors"

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

  async delete(reviewId: number) {
    const employerReview =
      await this.uowService.employerReviewRepository.findOneBy({ id: reviewId })
    if (!employerReview)
      throw new NotFoundException(ApiError.EMPLOYER_REVIEW_NOT_FOUND)

    await this.uowService.employerReviewRepository.remove(employerReview)

    return employerReview
  }
}
