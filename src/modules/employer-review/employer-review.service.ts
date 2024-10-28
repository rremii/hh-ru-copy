import { Injectable } from "@nestjs/common"
import { CreateEmployerReviewDto } from "./dto/create-employerReview.dto"
import { EmployerReview } from "./entities/employer-review.entity"

@Injectable()
export class EmployerReviewsService {
  async create(createDto: CreateEmployerReviewDto) {}

  async getAll() {}
}
